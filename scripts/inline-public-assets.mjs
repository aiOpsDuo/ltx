// Post-processes the dist-single build: inlines every public/ asset that
// ended up copied verbatim (fonts, SVG logos) as a base64 data URI directly
// inside index.html, then removes the now-unused copies. The video is left
// untouched — see the "video" exclusion below — because inlining a 25MB file
// as base64 would bloat the HTML to ~35MB for no practical benefit.
import { readFile, writeFile, readdir, stat, rm } from 'node:fs/promises'
import { join, extname, relative, sep } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, '$1')
const PUBLIC_DIR = join(ROOT, 'public')
const OUT_DIR = join(ROOT, 'dist-single')
const EXCLUDED_TOP_LEVEL_DIRS = new Set(['videos'])

const MIME_TYPES = {
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else {
      files.push(full)
    }
  }
  return files
}

async function main() {
  const htmlPath = join(OUT_DIR, 'index.html')
  let html = await readFile(htmlPath, 'utf8')

  const allFiles = await walk(PUBLIC_DIR)
  const inlinedRelPaths = []

  // Excluded assets (the video) stay as external files, but the app references
  // them with a root-absolute path ("/videos/..."). That only resolves when
  // served over http(s); opening index.html directly (file://) resolves "/"
  // against the filesystem root and the video 404s. Rewrite to a path relative
  // to index.html so double-clicking the file works too.
  for (const absPath of allFiles) {
    const relPath = relative(PUBLIC_DIR, absPath).split(sep).join('/')
    const topLevelDir = relPath.split('/')[0]
    if (!EXCLUDED_TOP_LEVEL_DIRS.has(topLevelDir)) continue

    const urlPath = `/${relPath}`
    if (html.includes(urlPath)) {
      html = html.split(urlPath).join(`./${relPath}`)
    }
  }

  for (const absPath of allFiles) {
    const relPath = relative(PUBLIC_DIR, absPath).split(sep).join('/')
    const topLevelDir = relPath.split('/')[0]
    if (EXCLUDED_TOP_LEVEL_DIRS.has(topLevelDir)) continue

    const urlPath = `/${relPath}`
    if (!html.includes(urlPath)) continue

    const ext = extname(absPath).toLowerCase()
    const mime = MIME_TYPES[ext]
    if (!mime) {
      console.warn(`[inline-public-assets] no mime mapping for ${urlPath}, skipping`)
      continue
    }

    const bytes = await readFile(absPath)
    const dataUri = `data:${mime};base64,${bytes.toString('base64')}`
    html = html.split(urlPath).join(dataUri)
    inlinedRelPaths.push(relPath)
  }

  await writeFile(htmlPath, html, 'utf8')

  // Drop the now-redundant copies of everything we just inlined, except the video.
  for (const topDir of await readdir(OUT_DIR)) {
    if (EXCLUDED_TOP_LEVEL_DIRS.has(topDir)) continue
    const full = join(OUT_DIR, topDir)
    const s = await stat(full)
    if (s.isDirectory() && ['brand', 'fonts'].includes(topDir)) {
      await rm(full, { recursive: true, force: true })
    }
  }
  await rm(join(OUT_DIR, 'favicon.svg'), { force: true }).catch(() => {})

  console.log(`[inline-public-assets] inlined ${inlinedRelPaths.length} asset(s) into index.html`)
  console.log('[inline-public-assets] kept external: public/videos/* (copied to dist-single/videos/)')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
