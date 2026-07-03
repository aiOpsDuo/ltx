/* @ds-bundle: {"format":4,"namespace":"LTXPerformanceDesignSystem_6db866","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/core/FeatureCard.jsx"},{"name":"FeatureChip","sourcePath":"components/core/FeatureChip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"CtaBand","sourcePath":"components/marketing/CtaBand.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"Nav","sourcePath":"components/marketing/Nav.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"}],"sourceHashes":{"assets/graphics/ltx-grafismo.js":"f84a722f0abe","components/core/Badge.jsx":"5b1baa400fbf","components/core/Button.jsx":"19d02d565eb2","components/core/Card.jsx":"8f735e674d9c","components/core/FeatureCard.jsx":"4b616126ea29","components/core/FeatureChip.jsx":"7df658d4d7c5","components/core/Input.jsx":"07414bf43110","components/core/Logo.jsx":"fee736e37e6d","components/core/Stat.jsx":"1222530581c2","components/marketing/CtaBand.jsx":"647f0a53d65b","components/marketing/Hero.jsx":"d114f2264daa","components/marketing/Nav.jsx":"ecfae6020243","components/marketing/Testimonial.jsx":"11145d3ddd11","ui_kits/web/HomePage.jsx":"e2a5633a1ce1","ui_kits/web/SiteFooter.jsx":"d939b220e409"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LTXPerformanceDesignSystem_6db866 = window.LTXPerformanceDesignSystem_6db866 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/graphics/ltx-grafismo.js
try { (() => {
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
      paths: [['M586 271.893L547.82 310.073L348.451 244.334L386.778 206.006L586 271.893Z', '#495351'], ['M354.521 174.637L317.134 212.024L315.754 211.637L250.015 12.2677L288.195 -25.9124L354.521 174.637Z', '#495351'], ['M586 657.956L547.82 696.136L348.451 630.397L386.778 592.07L586 657.956Z', ACCENT], ['M354.521 560.701L317.134 598.088L315.754 597.701L250.015 398.331L288.195 360.151L354.521 560.701Z', ACCENT], ['M586 1079.12L547.82 1117.3L348.451 1051.56L386.778 1013.23L586 1079.12Z', '#495351'], ['M354.521 981.861L317.134 1019.25L315.754 1018.86L250.015 819.491L288.195 781.311L354.521 981.861Z', '#495351'], ['M1282 886.306L1320.18 848.126L1519.55 913.864L1481.22 952.192L1282 886.306Z', '#495351'], ['M1513.48 983.561L1550.87 946.174L1552.25 946.561L1617.99 1145.93L1579.8 1184.11L1513.48 983.561Z', '#495351'], ['M1282 500.243L1320.18 462.063L1519.55 527.802L1481.22 566.13L1282 500.243Z', ACCENT], ['M1513.48 597.498L1550.87 560.111L1552.25 560.499L1617.99 759.868L1579.8 798.048L1513.48 597.498Z', ACCENT], ['M1282 79.083L1320.18 40.9029L1519.55 106.642L1481.22 144.969L1282 79.083Z', '#495351'], ['M1513.48 176.338L1550.87 138.951L1552.25 139.338L1617.99 338.708L1579.8 376.888L1513.48 176.338Z', '#495351'], ['M759 886.306L797.18 848.126L996.549 913.864L958.222 952.192L759 886.306Z', ACCENT], ['M990.479 983.561L1027.87 946.174L1029.25 946.561L1094.99 1145.93L1056.8 1184.11L990.479 983.561Z', ACCENT], ['M759 500.243L797.18 462.063L996.549 527.802L958.222 566.13L759 500.243Z', '#495351'], ['M990.479 597.498L1027.87 560.111L1029.25 560.499L1094.99 759.868L1056.8 798.048L990.479 597.498Z', '#495351'], ['M759 79.083L797.18 40.9029L996.549 106.642L958.222 144.969L759 79.083Z', ACCENT], ['M990.479 176.338L1027.87 138.951L1029.25 139.338L1094.99 338.708L1056.8 376.888L990.479 176.338Z', ACCENT]],
      dx: 8,
      dy: -5
    },
    '02': {
      bg: '#696F6D',
      paths: [['M1140 712H1095.27L1017 557.994H1061.9L1140 712Z', ACCENT], ['M1061.38 521.033H1017.58L1017 520.006L1095.27 366H1140L1061.38 521.033Z', ACCENT], ['M1231 712H1185.91L1107 557.994H1152.27L1231 712Z', ACCENT], ['M1151.74 521.033H1107.59L1107 520.006L1185.91 366H1231L1151.74 521.033Z', ACCENT], ['M766 714H812.046L898 542.566V536.407L812.046 366H766L852.977 536.407V542.566L766 714Z', ACCENT], ['M657 714H703.046L789 542.566V536.407L703.046 366H657L743.977 536.407V542.566L657 714Z', ACCENT], ['M451 712H405.909L327 557.994H372.265L451 712Z', ACCENT], ['M371.741 521.033H327.586L327 520.006L405.909 366H451L371.741 521.033Z', ACCENT], ['M541 712H496.273L418 557.994H462.9L541 712Z', ACCENT], ['M462.38 521.033H418.582L418 520.006L496.273 366H541L462.38 521.033Z', ACCENT], ['M77 714H123.046L209 542.566V536.407L123.046 366H77L163.977 536.407V542.566L77 714Z', ACCENT], ['M-32 714H14.0465L100 542.566V536.407L14.0465 366H-32L54.9768 536.407V542.566L-32 714Z', ACCENT], ['M1829 712H1784.27L1706 557.994H1750.9L1829 712Z', ACCENT], ['M1750.38 521.033H1706.58L1706 520.006L1784.27 366H1829L1750.38 521.033Z', ACCENT], ['M1920 712H1875.27L1797 557.994H1841.9L1920 712Z', ACCENT], ['M1841.38 521.033H1797.58L1797 520.006L1875.27 366H1920L1841.38 521.033Z', ACCENT], ['M1456 714H1501.7L1587 542.566V536.407L1501.7 366H1456L1542.32 536.407V542.566L1456 714Z', ACCENT], ['M1347 714H1392.7L1478 542.566V536.407L1392.7 366H1347L1433.32 536.407V542.566L1347 714Z', ACCENT]],
      dx: 0,
      dy: -8
    },
    '03': {
      bg: '#11161B',
      paths: [['M1044 679L1089.7 679L1175 508.552L1175 502.428L1089.7 333L1044 333L1130.32 502.428L1130.32 508.552L1044 679Z', ACCENT], ['M1678 542L1678 496.302L1507.55 411L1501.43 411L1332 496.302L1332 542L1501.43 455.682L1507.55 455.682L1678 542Z', ACCENT], ['M587 679L587 724.698L416.552 810L410.428 810L241 724.698L241 679L410.428 765.318L416.552 765.318L587 679Z', ACCENT], ['M722 1056L767.698 1056L853 885.552L853 879.428L767.698 710L722 710L808.318 879.428L808.318 885.552L722 1056Z', ACCENT], ['M787 446L787 491.091L632.994 570L632.994 524.735L787 446Z', '#3B403F'], ['M596.033 525.259L596.033 569.414L595.006 570L441 491.091L441 446L596.033 525.259Z', '#3B403F'], ['M1390 865L1390 910.091L1235.99 989L1235.99 943.735L1390 865Z', '#3B403F'], ['M1199.03 944.259L1199.03 988.414L1198.01 989L1044 910.091L1044 865L1199.03 944.259Z', '#3B403F'], ['M915 371H869.909L791 216.994H836.265L915 371Z', ACCENT], ['M835.741 180.033H791.586L791 179.006L869.909 25L915 25L835.741 180.033Z', ACCENT], ['M268 260L268 214.909L422.006 136L422.006 181.265L268 260Z', ACCENT], ['M458.967 180.741L458.967 136.586L459.994 136L614 214.909L614 260L458.967 180.741Z', ACCENT], ['M1044 151L1044 105.909L1198.01 27L1198.01 72.2651L1044 151Z', '#3B403F'], ['M1234.97 71.7407L1234.97 27.5864L1235.99 27L1390 105.909L1390 151L1234.97 71.7407Z', '#3B403F']],
      dx: 7,
      dy: -6
    }
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
    static get observedAttributes() {
      return ['variant', 'motion', 'opacity', 'speed', 'bg', 'mono', 'flip'];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open'
      });
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
      this.style.opacity = opacity != null ? opacity : this.style.opacity || '0.14';
      const bgRect = showBg ? `<rect width="1920" height="1080" fill="${def.bg}"></rect>` : '';
      const paths = def.paths.map(([d, fill], i) => {
        const c = mono ? ACCENT : fill;
        // Traveling phase: successive chevrons offset across the cycle.
        const delay = motion === 'reveal' ? `${Math.min(i, 14) * 45}ms` : `${-(i / n) * (speed || 6400)}ms`;
        return `<path class="p" d="${d}" fill="${c}" style="--i:${i};--dx:${def.dx}px;--dy:${def.dy}px;--lo:${lo};--hi:${hi};animation-delay:${delay}"></path>`;
      }).join('');
      const transform = flip ? ` transform="scale(-1,1)" transform-origin="960 540"` : '';
      root.innerHTML = `<style>${CSS}</style>` + `<svg viewBox="${VB}" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` + `<g${transform}>${bgRect}${paths}</g></svg>`;
    }
  }
  if (!customElements.get('ltx-grafismo')) customElements.define('ltx-grafismo', Grafismo);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/graphics/ltx-grafismo.js", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status pill, theme-aware via CSS variables.
 */

const TONES = {
  neutral: {
    bg: 'color-mix(in srgb, var(--ltx-text-title) 8%, transparent)',
    fg: 'var(--ltx-text-title)',
    border: '1px solid color-mix(in srgb, var(--ltx-text-title) 18%, transparent)'
  },
  brand: {
    bg: 'color-mix(in srgb, var(--ltx-accent) 12%, transparent)',
    fg: 'var(--ltx-accent)',
    border: '1px solid color-mix(in srgb, var(--ltx-accent) 30%, transparent)'
  },
  success: {
    bg: 'rgba(31,157,107,0.12)',
    fg: '#1F9D6B',
    border: '1px solid rgba(31,157,107,0.3)'
  },
  warn: {
    bg: 'rgba(192,132,21,0.12)',
    fg: '#C08415',
    border: '1px solid rgba(192,132,21,0.3)'
  },
  danger: {
    bg: 'rgba(200,56,47,0.12)',
    fg: '#C8382F',
    border: '1px solid rgba(200,56,47,0.3)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--ltx-text-body)',
    border: '1px solid var(--ltx-border)'
  }
};
function Badge({
  tone = 'neutral',
  uppercase = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 9999,
      fontFamily: uppercase ? 'var(--ltx-font-mono)' : 'var(--ltx-font-sans)',
      fontSize: 11,
      fontWeight: uppercase ? 700 : 500,
      letterSpacing: uppercase ? '0.06em' : '0',
      textTransform: uppercase ? 'uppercase' : 'none',
      lineHeight: 1.4,
      background: t.bg,
      color: t.fg,
      border: t.border,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — LTX Performance primary/secondary/ghost/danger.
 * Uses CSS variables so [data-theme="light"] flips colors automatically.
 */

const SIZE = {
  sm: {
    padY: 8,
    padX: 16,
    font: 14
  },
  md: {
    padY: 12,
    padX: 22,
    font: 14
  },
  lg: {
    padY: 14,
    padX: 28,
    font: 15
  }
};
function Button({
  variant = 'primary',
  size = 'lg',
  rounded = 'full',
  as: Tag = 'button',
  leadingIcon,
  trailingIcon,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZE[size] || SIZE.lg;
  const variants = {
    primary: {
      base: {
        background: 'var(--ltx-accent)',
        color: 'var(--ltx-text-on-accent)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--ltx-accent-hover)'
      }
    },
    secondary: {
      base: {
        background: 'transparent',
        color: 'var(--ltx-text-title)',
        border: '1px solid var(--ltx-text-title)'
      },
      hover: {
        background: 'color-mix(in srgb, var(--ltx-text-title) 8%, transparent)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--ltx-text-title)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'color-mix(in srgb, var(--ltx-text-title) 6%, transparent)'
      }
    },
    danger: {
      base: {
        background: '#C8382F',
        color: '#FFFFFF',
        border: '1px solid transparent'
      },
      hover: {
        background: '#A52E26'
      }
    }
  };
  const v = variants[variant] || variants.primary;
  const merged = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--ltx-font-sans)',
    fontWeight: 600,
    fontSize: s.font,
    lineHeight: 1,
    padding: `${s.padY}px ${s.padX}px`,
    borderRadius: rounded === 'md' ? 8 : 9999,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background 160ms cubic-bezier(0.22,1,0.36,1), transform 80ms ease-out',
    transform: active ? 'scale(0.98)' : 'scale(1)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...v.base,
    ...(hover && !disabled ? v.hover : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    disabled: Tag === 'button' ? disabled : undefined,
    style: merged
  }, rest), leadingIcon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-flex'
    }
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("span", null, children), trailingIcon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-flex'
    }
  }, trailingIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container, theme-aware via classes (survives React reconciliation).
 */

const PADDING = {
  none: 0,
  sm: 16,
  md: 24,
  lg: 32
};
function Card({
  variant = 'surface',
  padding = 'md',
  hoverable = false,
  as: Tag = 'div',
  className = '',
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const p = PADDING[padding] ?? PADDING.md;
  const bgClass = variant === 'ghost' ? '' : 'ltx-surface';
  const borderLeft = variant === 'accent' ? '2px solid var(--ltx-accent)' : undefined;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `${bgClass} ${className}`,
    onMouseEnter: hoverable ? () => setHover(true) : undefined,
    onMouseLeave: hoverable ? () => setHover(false) : undefined,
    style: {
      border: variant === 'ghost' ? '1px solid var(--ltx-border)' : '1px solid var(--ltx-border-soft)',
      borderLeft,
      padding: p,
      borderRadius: 12,
      transition: 'transform 240ms cubic-bezier(0.22,1,0.36,1), border-color 160ms, box-shadow 160ms',
      transform: hoverable && hover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: hoverable && hover ? '0 1px 2px rgba(17,22,27,0.08)' : 'none',
      ...style
    }
  }, rest), children);
}
function CardHeader({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginBottom: 12,
      ...style
    }
  }, rest), children);
}
function CardTitle({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.3,
      color: 'var(--ltx-text-title)',
      letterSpacing: '-0.01em',
      margin: 0,
      ...style
    }
  }, rest), children);
}
function CardBody({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ltx-text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FeatureChip — 40×40 icon tile, theme-aware.
 */

const SIZES = {
  sm: {
    box: 32,
    icon: 16
  },
  md: {
    box: 40,
    icon: 20
  },
  lg: {
    box: 48,
    icon: 24
  }
};
function FeatureChip({
  icon,
  size = 'md',
  tone = 'graphite',
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const bg = tone === 'accent' ? 'color-mix(in srgb, var(--ltx-accent) 14%, transparent)' : 'var(--ltx-chip-bg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      background: bg,
      color: 'var(--ltx-accent)',
      borderRadius: 8,
      flexShrink: 0,
      ...style
    }
  }, rest), React.isValidElement(icon) ? React.cloneElement(icon, {
    width: s.icon,
    height: s.icon,
    strokeWidth: 1.5
  }) : icon);
}
Object.assign(__ds_scope, { FeatureChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureChip.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FeatureCard — icon chip + title + body. Composes Card + FeatureChip.
 */

function FeatureCard({
  icon,
  title,
  body,
  hoverable = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    hoverable: hoverable,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.FeatureChip, {
    icon: icon
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'var(--ltx-text-title)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ltx-text-body)',
      margin: 0
    }
  }, body)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labeled form field, theme-aware.
 */

function Input({
  label,
  hint,
  error,
  id,
  required,
  as = 'input',
  rows = 4,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const [focus, setFocus] = React.useState(false);
  const fieldStyle = {
    width: '100%',
    fontFamily: 'var(--ltx-font-sans)',
    fontSize: 15,
    lineHeight: 1.5,
    color: 'var(--ltx-text-title)',
    background: 'var(--ltx-input-bg)',
    padding: '12px 14px',
    border: `1px solid ${error ? '#C8382F' : focus ? 'var(--ltx-accent)' : 'var(--ltx-border)'}`,
    borderRadius: 8,
    outline: 'none',
    boxShadow: focus ? `0 0 0 3px ${error ? 'rgba(200,56,47,0.25)' : 'var(--ltx-focus-ring)'}` : 'none',
    transition: 'border-color 160ms, box-shadow 160ms',
    resize: as === 'textarea' ? 'vertical' : undefined,
    ...style
  };
  const Field = as === 'textarea' ? 'textarea' : 'input';
  const fieldProps = as === 'textarea' ? {
    rows
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ltx-text-title)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: '#C8382F',
      marginLeft: 4
    }
  }, "*") : null) : null, /*#__PURE__*/React.createElement(Field, _extends({
    id: inputId,
    required: required,
    "aria-invalid": !!error || undefined,
    "aria-describedby": [hintId, errorId].filter(Boolean).join(' ') || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, fieldProps, rest)), hint && !error ? /*#__PURE__*/React.createElement("p", {
    id: hintId,
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 12,
      color: 'var(--ltx-text-muted)',
      margin: 0
    }
  }, hint) : null, error ? /*#__PURE__*/React.createElement("p", {
    id: errorId,
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 12,
      color: '#C8382F',
      margin: 0
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — renders one of the LTX lockups inline as an <img>.
 *
 * `theme` picks the right asset:
 *   - 'dark'  (default) — Branco Gelo letters + Verde Neon Suave X. For dark canvases.
 *   - 'light' — Preto Profundo letters + Verde brand-800 X. For light canvases.
 *   - 'mono'  — Single-color (all dark). For greyscale / one-color print.
 */

const SOURCES = {
  dark: {
    horizontal: 'assets/logo/lockup-horizontal.svg',
    stacked: 'assets/logo/lockup-stacked.svg',
    mark: 'assets/logo/mark.svg',
    favicon: 'assets/logo/favicon.svg'
  },
  light: {
    horizontal: 'assets/logo/lockup-horizontal-light.svg',
    stacked: 'assets/logo/lockup-stacked-light.svg',
    mark: 'assets/logo/mark-light.svg',
    favicon: 'assets/logo/favicon.svg'
  },
  mono: {
    horizontal: 'assets/logo/wordmark.svg',
    stacked: 'assets/logo/wordmark.svg',
    mark: 'assets/logo/mark-inverse.svg',
    favicon: 'assets/logo/favicon.svg'
  }
};
function Logo({
  variant = 'horizontal',
  theme = 'dark',
  height = 32,
  basePath = '',
  style,
  ...rest
}) {
  const themeSet = SOURCES[theme] || SOURCES.dark;
  const file = themeSet[variant] || themeSet.horizontal;
  const src = (basePath ? basePath.replace(/\/$/, '') + '/' : '') + file;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "LTX Performance",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — big number + label + optional source. Theme-aware.
 */

const SIZES = {
  sm: {
    num: 32,
    label: 13
  },
  md: {
    num: 48,
    label: 14
  },
  lg: {
    num: 64,
    label: 15
  }
};
function Stat({
  value,
  label,
  source,
  align = 'left',
  size = 'md',
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: s.num,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--ltx-accent)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: s.label,
      lineHeight: 1.45,
      color: 'var(--ltx-text-title)',
      maxWidth: '32ch'
    }
  }, label), source ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontSize: 11,
      letterSpacing: '0.04em',
      color: 'var(--ltx-text-muted)',
      marginTop: 4
    }
  }, "\u2014 ", source) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CtaBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CtaBand — closing CTA section. Uses theme classes.
 *
 * Variants:
 *   - `surface` (default) — `--ltx-surface` background (calm).
 *   - `accent` — Verde Neon background (loud — once per page max).
 */

function CtaBand({
  overline,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  variant = 'surface',
  style,
  className = '',
  ...rest
}) {
  const isAccent = variant === 'accent';
  const bgClass = isAccent ? 'ltx-accent-bg' : 'ltx-surface';
  return /*#__PURE__*/React.createElement("section", _extends({
    className: `${bgClass} ${className}`,
    style: {
      padding: '96px 32px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 16
    }
  }, overline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: isAccent ? 'var(--ltx-text-on-accent)' : 'var(--ltx-accent)',
      opacity: isAccent ? 0.75 : 1
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 'clamp(28px, 4vw, 40px)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: isAccent ? 'var(--ltx-text-on-accent)' : 'var(--ltx-text-title)',
      margin: 0,
      maxWidth: 760
    }
  }, headline), subhead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 16,
      lineHeight: 1.55,
      color: isAccent ? 'var(--ltx-text-on-accent)' : 'var(--ltx-text-body)',
      opacity: isAccent ? 0.85 : 1,
      margin: 0,
      maxWidth: 560
    }
  }, subhead) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 16,
      justifyContent: 'center'
    }
  }, primaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: primaryCta.href,
    size: "lg",
    style: isAccent ? {
      background: 'var(--ltx-text-on-accent)',
      color: 'var(--ltx-accent)'
    } : undefined
  }, primaryCta.label) : null, secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: secondaryCta.href,
    size: "lg",
    variant: "ghost",
    style: isAccent ? {
      color: 'var(--ltx-text-on-accent)'
    } : undefined
  }, secondaryCta.label) : null)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hero — marketing hero block. Uses theme classes.
 */

function Hero({
  overline,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  image,
  align = 'left',
  className = '',
  style,
  ...rest
}) {
  const centered = align === 'center' || !image;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: `ltx-bg ${className}`,
    style: {
      padding: '96px 32px',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: image ? '1.1fr 1fr' : '1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: centered ? 'center' : 'flex-start',
      textAlign: centered ? 'center' : 'left',
      maxWidth: centered ? 760 : 'none',
      margin: centered ? '0 auto' : 0
    }
  }, overline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ltx-accent)',
      marginBottom: 16
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 'clamp(36px, 5vw, 56px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--ltx-text-title)',
      margin: 0,
      maxWidth: 720
    }
  }, headline), subhead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--ltx-text-body)',
      marginTop: 20,
      maxWidth: 540
    }
  }, subhead) : null, primaryCta || secondaryCta ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 36,
      justifyContent: centered ? 'center' : 'flex-start'
    }
  }, primaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: primaryCta.href,
    size: "lg"
  }, primaryCta.label) : null, secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: secondaryCta.href,
    size: "lg",
    variant: "secondary"
  }, secondaryCta.label) : null) : null), image ? /*#__PURE__*/React.createElement("div", {
    className: "ltx-surface",
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 12,
      overflow: 'hidden',
      border: '1px solid var(--ltx-border-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image.src,
    alt: image.alt || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })) : null));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nav — sticky top bar. Theme-aware via CSS variables.
 * Auto-picks logo theme from the document's [data-theme] attribute.
 */

function Nav({
  links = [],
  cta,
  basePath = '',
  sticky = true,
  style,
  ...rest
}) {
  const [stuck, setStuck] = React.useState(false);
  const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    const read = () => setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    return () => obs.disconnect();
  }, []);
  React.useEffect(() => {
    if (!sticky) return;
    const on = () => setStuck(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, [sticky]);
  const stuckBg = theme === 'light' ? 'rgba(255, 255, 255, 0.88)' : 'rgba(17, 22, 27, 0.85)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: stuck ? stuckBg : 'transparent',
      backdropFilter: stuck ? 'blur(8px)' : 'none',
      WebkitBackdropFilter: stuck ? 'blur(8px)' : 'none',
      borderBottom: stuck ? '1px solid var(--ltx-border-soft)' : '1px solid transparent',
      transition: 'background 240ms, border-color 240ms',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    "aria-label": "LTX Performance",
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "horizontal",
    theme: theme === 'light' ? 'light' : 'dark',
    height: 26,
    basePath: basePath
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ltx-text-body)',
      textDecoration: 'none',
      transition: 'color 160ms'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--ltx-text-title)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--ltx-text-body)'
  }, l.label))), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: cta.href,
    size: "md"
  }, cta.label) : null));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial — quote + attribution + outcome stat. Uses theme classes for surfaces.
 */

function Testimonial({
  quote,
  attribution,
  outcome,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "ltx-surface",
    style: {
      border: '1px solid var(--ltx-border-soft)',
      borderRadius: 12,
      padding: 40,
      display: 'grid',
      gridTemplateColumns: outcome ? '1fr 220px' : '1fr',
      gap: 36,
      alignItems: 'start',
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 'clamp(20px, 2.4vw, 26px)',
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
      color: 'var(--ltx-text-title)',
      margin: 0
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, attribution.avatar ? /*#__PURE__*/React.createElement("img", {
    src: attribution.avatar,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      objectFit: 'cover',
      background: 'var(--ltx-chip-bg)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--ltx-chip-bg)'
    },
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ltx-text-title)'
    }
  }, attribution.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 13,
      color: 'var(--ltx-text-body)'
    }
  }, [attribution.role, attribution.business, attribution.city].filter(Boolean).join(' · '))))), outcome ? /*#__PURE__*/React.createElement("aside", {
    className: "ltx-bg",
    style: {
      border: '1px solid var(--ltx-border)',
      borderLeft: '2px solid var(--ltx-accent)',
      borderRadius: 8,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--ltx-accent)'
    }
  }, outcome.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--ltx-text-body)',
      marginTop: 10
    }
  }, outcome.label)) : null);
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HomePage — LTX Performance marketing home (cleaner, theme-aware).
 * Sections wrap in `.ltx-bg` classes (not inline var() backgrounds) so theme
 * switches cascade reliably.
 *
 * The ThemeSwitch is placed below the nav band (top: 92px) so it doesn't
 * collide with the right-side CTA.
 */

function ThemeSwitch({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Theme switcher",
    className: "ltx-surface",
    style: {
      position: 'fixed',
      top: 92,
      right: 24,
      zIndex: 100,
      display: 'flex',
      gap: 4,
      border: '1px solid var(--ltx-border-soft)',
      borderRadius: 9999,
      padding: 4,
      fontFamily: 'var(--ltx-font-mono)',
      fontSize: 11,
      letterSpacing: '0.04em',
      boxShadow: '0 2px 8px rgba(17,22,27,0.18)'
    }
  }, ['dark', 'light'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange(t),
    "aria-pressed": value === t,
    className: value === t ? 'ltx-accent-bg' : '',
    style: {
      color: value === t ? 'var(--ltx-text-on-accent)' : 'var(--ltx-text-body)',
      border: 'none',
      background: value === t ? undefined : 'transparent',
      borderRadius: 9999,
      padding: '6px 14px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      letterSpacing: 'inherit',
      textTransform: 'uppercase',
      fontWeight: 700,
      transition: 'color 160ms'
    }
  }, t)));
}
const HpIcon = path => p => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), path);
const HpWorkflow = HpIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "6",
  height: "6",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "15",
  y: "15",
  width: "6",
  height: "6",
  rx: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 6h6a3 3 0 0 1 3 3v6"
})));
const HpLineChart = HpIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M3 3v18h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "m19 9-5 5-4-4-3 3"
})));
const HpClock = HpIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
})));
function HomePage({
  basePath = '../..'
}) {
  const ns = Object.keys(window).find(k => k.startsWith('LTXPerformanceDesignSystem_'));
  const DS = ns ? window[ns] : null;
  const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  if (!DS) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      fontFamily: 'system-ui'
    }
  }, "Carregando design system\u2026");
  const {
    Nav,
    Hero,
    FeatureCard,
    Testimonial,
    CtaBand
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    key: theme,
    className: "ltx-bg",
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(ThemeSwitch, {
    value: theme,
    onChange: setTheme
  }), /*#__PURE__*/React.createElement(Nav, {
    basePath: basePath,
    links: [{
      label: 'Metodologia',
      href: '#metodo'
    }, {
      label: 'Clientes',
      href: '#clientes'
    }, {
      label: 'Diagnóstico',
      href: '#contato'
    }],
    cta: {
      label: 'Falar com consultor',
      href: '#contato'
    }
  }), /*#__PURE__*/React.createElement(Hero, {
    overline: "l\xF3gica em movimento",
    headline: "Reduza em 40% o ciclo m\xE9dio de vendas da sua equipe.",
    subhead: "Integramos seus canais de leads ao seu CRM em 3 dias. Sem planilhas manuais.",
    primaryCta: {
      label: 'Analisar minha operação',
      href: '#contato'
    },
    secondaryCta: {
      label: 'Ver metodologia',
      href: '#metodo'
    },
    image: {
      src: basePath + '/assets/images/sample02.png',
      alt: 'Silhueta de cliente em conversa'
    }
  }), /*#__PURE__*/React.createElement("section", {
    id: "metodo",
    className: "ltx-bg",
    style: {
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 56,
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ltx-accent)'
    }
  }, "por que LTX"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 'clamp(28px, 3.4vw, 40px)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: 'var(--ltx-text-title)',
      margin: 0
    }
  }, "Opera\xE7\xE3o coordenada, sem planilhas paralelas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(HpWorkflow, null),
    title: "Triagem autom\xE1tica",
    body: "Formul\xE1rios conectados ao Pipedrive, com primeira mensagem em 3 segundos."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(HpLineChart, null),
    title: "Dados consolidados",
    body: "WhatsApp Business, RD Station e HubSpot no mesmo hist\xF3rico de cliente."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(HpClock, null),
    title: "Opera\xE7\xE3o em 3 dias",
    body: "Do diagn\xF3stico ao primeiro fluxo, antes do pr\xF3ximo ciclo de fechamento."
  })))), /*#__PURE__*/React.createElement("section", {
    id: "clientes",
    className: "ltx-bg",
    style: {
      padding: '0 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Sincronizamos a triagem de leads e o atendimento na mesma semana. O primeiro contato caiu de 4 horas para 7 minutos.",
    attribution: {
      name: 'Marina Cardoso',
      role: 'Head de Vendas',
      business: 'Hospital São Lucas',
      city: 'Porto Alegre'
    },
    outcome: {
      value: '34%',
      label: 'redução de CAC em 8 semanas'
    }
  }))), /*#__PURE__*/React.createElement(CtaBand, {
    id: "contato",
    overline: "diagn\xF3stico inicial",
    headline: "Pronto para tirar os gargalos da sua opera\xE7\xE3o?",
    subhead: "30 minutos. Mapeamos as 3 principais automa\xE7\xF5es para sua equipe.",
    primaryCta: {
      label: 'Agendar diagnóstico',
      href: '#contato'
    }
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    basePath: basePath
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/SiteFooter.jsx
try { (() => {
/**
 * SiteFooter — minimal LTX site footer. Theme-aware via classes.
 */
function SiteFooter({
  basePath = '../..'
}) {
  const ns = Object.keys(window).find(k => k.startsWith('LTXPerformanceDesignSystem_'));
  const DS = ns ? window[ns] : {};
  const {
    Logo
  } = DS;
  const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    // re-read on toggle
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("footer", {
    className: "ltx-bg",
    style: {
      borderTop: '1px solid var(--ltx-border-soft)',
      padding: '56px 32px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: 380
    }
  }, Logo ? /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    theme: theme === 'light' ? 'light' : 'dark',
    height: 22,
    basePath: basePath
  }) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--ltx-text-muted)',
      margin: 0
    }
  }, "Acelera\xE7\xE3o comercial e estrutura\xE7\xE3o de opera\xE7\xF5es de vendas B2B.")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, ['Metodologia', 'Clientes', 'Preços', 'LinkedIn'].map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 13,
      color: 'var(--ltx-text-body)',
      textDecoration: 'none'
    }
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--ltx-border-soft)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--ltx-font-mono)',
      fontSize: 11,
      letterSpacing: '0.04em',
      color: 'var(--ltx-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 LTX Performance"), /*#__PURE__*/React.createElement("span", null, "l\xF3gica em movimento.")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/SiteFooter.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.FeatureChip = __ds_scope.FeatureChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
