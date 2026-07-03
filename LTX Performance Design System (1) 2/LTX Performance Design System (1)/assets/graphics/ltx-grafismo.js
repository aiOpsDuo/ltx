/* LTX Performance — <ltx-grafismo>
 * Reusable animated brand graphic (grafismo). Works in any plain HTML:
 * slides, cards, web. Renders one of the three official chevron fields
 * (ltx_graph01–03) with quiet, brand-legal motion.
 *
 *   <ltx-grafismo variant="01" motion="flow" opacity="0.14"></ltx-grafismo>
 *
 * Attributes
 *   variant : "01" | "02" | "03"        which official field (default "01")
 *   motion  : "flow" | "wave" | "reveal" | "none"   (default "flow")
 *             flow   — chevrons drift ≤8px in the arrow direction, looping
 *             wave   — brightness travels across the field, looping
 *             reveal — one-shot staggered fade + 8px translate-up entrance
 *   opacity : 0–1 ceiling for the whole field         (default 0.14)
 *   speed   : ms for one motion cycle                  (default 6400)
 *   bg      : present → include the field's solid background rect
 *   mono    : present → force every chevron to Verde Neon
 *   flip    : present → mirror horizontally
 *
 * Motion honors prefers-reduced-motion (falls back to the lit end-state).
 * Rules respected: fade + ≤8px translate at brand durations, ease-out-expo /
 * ease-in-out only. No bounce, shake, parallax, shimmer, scale, or rotate.
 */
(() => {
  const ACCENT = '#BCFFB7';
  const VB = '0 0 1920 1080';

  // Each variant: solid bg color + ordered chevron paths {d, fill}.
  const V = {
    '01': {
      bg: '#3A3F3E',
      paths: [
        ['M586 271.893L547.82 310.073L348.451 244.334L386.778 206.006L586 271.893Z', '#495351'],
        ['M354.521 174.637L317.134 212.024L315.754 211.637L250.015 12.2677L288.195 -25.9124L354.521 174.637Z', '#495351'],
        ['M586 657.956L547.82 696.136L348.451 630.397L386.778 592.07L586 657.956Z', ACCENT],
        ['M354.521 560.701L317.134 598.088L315.754 597.701L250.015 398.331L288.195 360.151L354.521 560.701Z', ACCENT],
        ['M586 1079.12L547.82 1117.3L348.451 1051.56L386.778 1013.23L586 1079.12Z', '#495351'],
        ['M354.521 981.861L317.134 1019.25L315.754 1018.86L250.015 819.491L288.195 781.311L354.521 981.861Z', '#495351'],
        ['M1282 886.306L1320.18 848.126L1519.55 913.864L1481.22 952.192L1282 886.306Z', '#495351'],
        ['M1513.48 983.561L1550.87 946.174L1552.25 946.561L1617.99 1145.93L1579.8 1184.11L1513.48 983.561Z', '#495351'],
        ['M1282 500.243L1320.18 462.063L1519.55 527.802L1481.22 566.13L1282 500.243Z', ACCENT],
        ['M1513.48 597.498L1550.87 560.111L1552.25 560.499L1617.99 759.868L1579.8 798.048L1513.48 597.498Z', ACCENT],
        ['M1282 79.083L1320.18 40.9029L1519.55 106.642L1481.22 144.969L1282 79.083Z', '#495351'],
        ['M1513.48 176.338L1550.87 138.951L1552.25 139.338L1617.99 338.708L1579.8 376.888L1513.48 176.338Z', '#495351'],
        ['M759 886.306L797.18 848.126L996.549 913.864L958.222 952.192L759 886.306Z', ACCENT],
        ['M990.479 983.561L1027.87 946.174L1029.25 946.561L1094.99 1145.93L1056.8 1184.11L990.479 983.561Z', ACCENT],
        ['M759 500.243L797.18 462.063L996.549 527.802L958.222 566.13L759 500.243Z', '#495351'],
        ['M990.479 597.498L1027.87 560.111L1029.25 560.499L1094.99 759.868L1056.8 798.048L990.479 597.498Z', '#495351'],
        ['M759 79.083L797.18 40.9029L996.549 106.642L958.222 144.969L759 79.083Z', ACCENT],
        ['M990.479 176.338L1027.87 138.951L1029.25 139.338L1094.99 338.708L1056.8 376.888L990.479 176.338Z', ACCENT],
      ],
      dx: 8, dy: -5,
    },
    '02': {
      bg: '#696F6D',
      paths: [
        ['M1140 712H1095.27L1017 557.994H1061.9L1140 712Z', ACCENT],
        ['M1061.38 521.033H1017.58L1017 520.006L1095.27 366H1140L1061.38 521.033Z', ACCENT],
        ['M1231 712H1185.91L1107 557.994H1152.27L1231 712Z', ACCENT],
        ['M1151.74 521.033H1107.59L1107 520.006L1185.91 366H1231L1151.74 521.033Z', ACCENT],
        ['M766 714H812.046L898 542.566V536.407L812.046 366H766L852.977 536.407V542.566L766 714Z', ACCENT],
        ['M657 714H703.046L789 542.566V536.407L703.046 366H657L743.977 536.407V542.566L657 714Z', ACCENT],
        ['M451 712H405.909L327 557.994H372.265L451 712Z', ACCENT],
        ['M371.741 521.033H327.586L327 520.006L405.909 366H451L371.741 521.033Z', ACCENT],
        ['M541 712H496.273L418 557.994H462.9L541 712Z', ACCENT],
        ['M462.38 521.033H418.582L418 520.006L496.273 366H541L462.38 521.033Z', ACCENT],
        ['M77 714H123.046L209 542.566V536.407L123.046 366H77L163.977 536.407V542.566L77 714Z', ACCENT],
        ['M-32 714H14.0465L100 542.566V536.407L14.0465 366H-32L54.9768 536.407V542.566L-32 714Z', ACCENT],
        ['M1829 712H1784.27L1706 557.994H1750.9L1829 712Z', ACCENT],
        ['M1750.38 521.033H1706.58L1706 520.006L1784.27 366H1829L1750.38 521.033Z', ACCENT],
        ['M1920 712H1875.27L1797 557.994H1841.9L1920 712Z', ACCENT],
        ['M1841.38 521.033H1797.58L1797 520.006L1875.27 366H1920L1841.38 521.033Z', ACCENT],
        ['M1456 714H1501.7L1587 542.566V536.407L1501.7 366H1456L1542.32 536.407V542.566L1456 714Z', ACCENT],
        ['M1347 714H1392.7L1478 542.566V536.407L1392.7 366H1347L1433.32 536.407V542.566L1347 714Z', ACCENT],
      ],
      dx: 0, dy: -8,
    },
    '03': {
      bg: '#11161B',
      paths: [
        ['M1044 679L1089.7 679L1175 508.552L1175 502.428L1089.7 333L1044 333L1130.32 502.428L1130.32 508.552L1044 679Z', ACCENT],
        ['M1678 542L1678 496.302L1507.55 411L1501.43 411L1332 496.302L1332 542L1501.43 455.682L1507.55 455.682L1678 542Z', ACCENT],
        ['M587 679L587 724.698L416.552 810L410.428 810L241 724.698L241 679L410.428 765.318L416.552 765.318L587 679Z', ACCENT],
        ['M722 1056L767.698 1056L853 885.552L853 879.428L767.698 710L722 710L808.318 879.428L808.318 885.552L722 1056Z', ACCENT],
        ['M787 446L787 491.091L632.994 570L632.994 524.735L787 446Z', '#3B403F'],
        ['M596.033 525.259L596.033 569.414L595.006 570L441 491.091L441 446L596.033 525.259Z', '#3B403F'],
        ['M1390 865L1390 910.091L1235.99 989L1235.99 943.735L1390 865Z', '#3B403F'],
        ['M1199.03 944.259L1199.03 988.414L1198.01 989L1044 910.091L1044 865L1199.03 944.259Z', '#3B403F'],
        ['M915 371H869.909L791 216.994H836.265L915 371Z', ACCENT],
        ['M835.741 180.033H791.586L791 179.006L869.909 25L915 25L835.741 180.033Z', ACCENT],
        ['M268 260L268 214.909L422.006 136L422.006 181.265L268 260Z', ACCENT],
        ['M458.967 180.741L458.967 136.586L459.994 136L614 214.909L614 260L458.967 180.741Z', ACCENT],
        ['M1044 151L1044 105.909L1198.01 27L1198.01 72.2651L1044 151Z', '#3B403F'],
        ['M1234.97 71.7407L1234.97 27.5864L1235.99 27L1390 105.909L1390 151L1234.97 71.7407Z', '#3B403F'],
      ],
      dx: 7, dy: -6,
    },
  };

  const CSS = `
    :host { display:block; position:relative; overflow:hidden; line-height:0; }
    svg { position:absolute; inset:0; width:100%; height:100%; display:block; }
    .p {
      transform-box: fill-box;
      transform-origin: center;
      will-change: opacity, transform;
    }
    @keyframes ltxg-wave {
      0%, 100% { opacity: var(--lo); }
      50%      { opacity: var(--hi); }
    }
    @keyframes ltxg-flow {
      0%, 100% { opacity: var(--lo); transform: translate(0,0); }
      50%      { opacity: var(--hi); transform: translate(var(--dx), var(--dy)); }
    }
    @keyframes ltxg-reveal {
      from { opacity: 0;        transform: translateY(8px); }
      to   { opacity: var(--hi); transform: translateY(0); }
    }
    :host([motion="wave"])   .p { animation: ltxg-wave  var(--dur) cubic-bezier(0.4,0,0.2,1) infinite; }
    :host([motion="flow"])   .p { animation: ltxg-flow  var(--dur) cubic-bezier(0.4,0,0.2,1) infinite; }
    :host([motion="reveal"]) .p { animation: ltxg-reveal 480ms cubic-bezier(0.22,1,0.36,1) both; opacity: 0; }
    @media (prefers-reduced-motion: reduce) {
      .p { animation: none !important; opacity: var(--hi) !important; transform: none !important; }
    }
  `;

  class Grafismo extends HTMLElement {
    static get observedAttributes() { return ['variant', 'motion', 'opacity', 'speed', 'bg', 'mono', 'flip']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.shadowRoot) this.render(); }

    render() {
      const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
      const key = this.getAttribute('variant') || '01';
      const def = V[key] || V['01'];
      const motion = this.getAttribute('motion') || 'flow';
      const opacity = this.getAttribute('opacity');
      const speed = parseInt(this.getAttribute('speed') || '', 10);
      const showBg = this.hasAttribute('bg');
      const mono = this.hasAttribute('mono');
      const flip = this.hasAttribute('flip');

      const dur = (speed || 6400) + 'ms';
      const n = def.paths.length;

      // Reveal reads best low→high; loops read best pulsing from a dim floor.
      const lo = motion === 'wave' ? 0.30 : 0.42;
      const hi = 1;

      this.style.opacity = opacity != null ? opacity : (this.style.opacity || '0.14');

      const bgRect = showBg ? `<rect width="1920" height="1080" fill="${def.bg}"></rect>` : '';
      const paths = def.paths.map(([d, fill], i) => {
        const c = mono ? ACCENT : fill;
        // Traveling phase: successive chevrons offset across the cycle.
        const delay = motion === 'reveal'
          ? `${Math.min(i, 14) * 45}ms`
          : `${-(i / n) * (speed || 6400)}ms`;
        return `<path class="p" d="${d}" fill="${c}" style="--i:${i};--dx:${def.dx}px;--dy:${def.dy}px;--lo:${lo};--hi:${hi};animation-delay:${delay}"></path>`;
      }).join('');

      const transform = flip ? ` transform="scale(-1,1)" transform-origin="960 540"` : '';
      root.innerHTML = `<style>${CSS}</style>` +
        `<svg viewBox="${VB}" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
        `<g${transform}>${bgRect}${paths}</g></svg>`;
    }
  }

  if (!customElements.get('ltx-grafismo')) customElements.define('ltx-grafismo', Grafismo);
})();
