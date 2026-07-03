(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     Theme toggle (dark default / light alternative)
     ============================================================ */
  var themeToggle = document.getElementById('themeToggle');
  var htmlEl = document.documentElement;

  function currentTheme() {
    return htmlEl.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function applyThemeA11y() {
    var isLight = currentTheme() === 'light';
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Alternar para modo escuro' : 'Alternar para modo claro');
  }

  if (themeToggle) {
    applyThemeA11y();
    themeToggle.addEventListener('click', function () {
      var next = currentTheme() === 'light' ? 'dark' : 'light';
      if (next === 'dark') {
        htmlEl.removeAttribute('data-theme');
      } else {
        htmlEl.setAttribute('data-theme', 'light');
      }
      try { localStorage.setItem('ltx-theme', next); } catch (e) {}
      applyThemeA11y();
    });
  }

  /* ============================================================
     Header — glass surface after scroll (Design System: >40px)
     ============================================================ */
  var header = document.getElementById('siteHeader');
  var SCROLL_THRESHOLD = 40;

  function updateHeaderState() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  /* ============================================================
     Hero — rotating last word + dynamic visual area, in sync.
     One timer drives three things at the same tick: the headline
     word, the media slide (video/imagem real da plataforma) and the
     progress dots — so the text and the visual evolve together, the
     way the Gong hero pairs a changing claim with a changing scene.
     ============================================================ */
  var wordRotate = document.getElementById('wordRotate');
  var heroVisual = document.getElementById('heroVisual');
  var heroProgress = document.getElementById('heroVisualProgress');

  if (wordRotate) {
    var words = Array.prototype.slice.call(wordRotate.querySelectorAll('.word-rotate__item'));
    var slides = heroVisual ? Array.prototype.slice.call(heroVisual.querySelectorAll('.hero__slide')) : [];
    var dots = heroProgress ? Array.prototype.slice.call(heroProgress.querySelectorAll('.hero__visual-progress-dot')) : [];
    var activeIndex = 0;
    var ROTATE_INTERVAL = 3400;
    var LEAVE_DURATION = 480;

    function playSlideMedia(slide) {
      if (!slide) return;
      var media = slide.querySelector('video');
      if (media) {
        var playPromise = media.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function () { /* autoplay blocked — poster stays visible */ });
        }
      }
    }

    function pauseSlideMedia(slide) {
      if (!slide) return;
      var media = slide.querySelector('video');
      if (media) {
        media.pause();
        try { media.currentTime = 0; } catch (e) {}
      }
    }

    function goToIndex(nextIndex) {
      var currentWord = words[activeIndex];
      var nextWord = words[nextIndex];
      var currentSlide = slides[activeIndex];
      var nextSlide = slides[nextIndex];
      var currentDot = dots[activeIndex];
      var nextDot = dots[nextIndex];

      if (currentWord) { currentWord.classList.add('is-leaving'); currentWord.classList.remove('is-active'); }
      if (currentSlide) { currentSlide.classList.add('is-leaving'); currentSlide.classList.remove('is-active'); }
      if (currentDot) currentDot.classList.remove('is-active');

      window.setTimeout(function () {
        if (currentWord) currentWord.classList.remove('is-leaving');
        if (currentSlide) { currentSlide.classList.remove('is-leaving'); pauseSlideMedia(currentSlide); }
      }, LEAVE_DURATION);

      if (nextWord) nextWord.classList.add('is-active');
      if (nextSlide) { nextSlide.classList.add('is-active'); playSlideMedia(nextSlide); }
      if (nextDot) nextDot.classList.add('is-active');

      activeIndex = nextIndex;
    }

    // Start the first slide's video (if any) even before the first tick.
    playSlideMedia(slides[activeIndex]);

    if (words.length > 1 && !prefersReducedMotion) {
      setInterval(function () {
        goToIndex((activeIndex + 1) % words.length);
      }, ROTATE_INTERVAL);
    } else if (prefersReducedMotion) {
      // Reduced motion: freeze on the first word/slide, no autoplay.
      pauseSlideMedia(slides[activeIndex]);
    }
  }

  /* ============================================================
     Reveal on scroll (fade + translate), skipped under reduced motion
     via CSS already; IntersectionObserver only adds the visible class.
     ============================================================ */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ============================================================
     Ciclo de Evolução — o quadrante ativo avança conforme o scroll.
     Cada "passo" (bloco de conteúdo à direita) aciona, ao cruzar o
     centro da viewport, o estado ativo do arco/nó correspondente no
     círculo sticky à esquerda e a seta entre o quadrante anterior e o
     novo recebe um pequeno "nudge" de rotação — nada além disso.
     ============================================================ */
  var cicloScroller = document.getElementById('cicloScroller');
  if (cicloScroller && 'IntersectionObserver' in window) {
    var cicloSteps = Array.prototype.slice.call(cicloScroller.querySelectorAll('.ciclo__panel-step'));
    var cicloArcs = Array.prototype.slice.call(cicloScroller.querySelectorAll('.ciclo__arc'));
    var cicloNodes = Array.prototype.slice.call(cicloScroller.querySelectorAll('.ciclo__node'));
    var cicloArrows = Array.prototype.slice.call(cicloScroller.querySelectorAll('.ciclo__arrow'));
    var cicloActiveQuadrant = null;

    function setCicloActive(quadrant) {
      if (quadrant === cicloActiveQuadrant) return;
      var previous = cicloActiveQuadrant;
      cicloActiveQuadrant = quadrant;

      cicloSteps.forEach(function (step) {
        step.classList.toggle('is-active', step.getAttribute('data-quadrant') === quadrant);
      });
      cicloArcs.forEach(function (arc) {
        arc.classList.toggle('is-active', arc.getAttribute('data-quadrant') === quadrant);
      });
      cicloNodes.forEach(function (node) {
        node.classList.toggle('is-active', node.getAttribute('data-quadrant') === quadrant);
      });

      if (previous !== null && !prefersReducedMotion) {
        var betweenKey = previous + '-' + quadrant;
        var arrow = cicloArrows.filter(function (a) { return a.getAttribute('data-between') === betweenKey; })[0];
        if (arrow) {
          arrow.classList.add('is-pulsing');
          window.setTimeout(function () { arrow.classList.remove('is-pulsing'); }, 600);
        }
      }
    }

    var cicloObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setCicloActive(entry.target.getAttribute('data-quadrant'));
        }
      });
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });

    cicloSteps.forEach(function (step) { cicloObserver.observe(step); });

    // O primeiro quadrante já nasce ativo, sem esperar o primeiro scroll.
    setCicloActive('0');
  }

  /* ============================================================
     Depoimentos — slider de cards com dots de navegação. Clicar num
     dot rola até o card correspondente; um IntersectionObserver
     dentro da própria trilha mantém o dot ativo sincronizado com o
     card mais visível durante o scroll manual (touch/mouse).
     ============================================================ */
  var depoimentosTrack = document.getElementById('depoimentosTrack');
  var depoimentosDots = document.getElementById('depoimentosDots');

  if (depoimentosTrack && depoimentosDots) {
    var depoCards = Array.prototype.slice.call(depoimentosTrack.querySelectorAll('.depo-card'));
    var depoDots = Array.prototype.slice.call(depoimentosDots.querySelectorAll('.depoimentos__dot'));

    function setDepoActiveDot(index) {
      depoDots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
      });
    }

    depoDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var index = parseInt(dot.getAttribute('data-target'), 10);
        var card = depoCards[index];
        if (card) {
          card.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            inline: 'start',
            block: 'nearest'
          });
        }
      });
    });

    if ('IntersectionObserver' in window) {
      var depoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var index = depoCards.indexOf(entry.target);
            if (index > -1) setDepoActiveDot(index);
          }
        });
      }, { root: depoimentosTrack, threshold: 0.6 });

      depoCards.forEach(function (card) { depoObserver.observe(card); });
    }
  }

  /* ============================================================
     Generic accordion helper (used by FAQ)
     ============================================================ */
  function setPanelOpen(trigger, panel, open) {
    trigger.setAttribute('aria-expanded', String(open));
    if (open) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = '0px';
    }
  }

  function initAccordionGroup(itemSelector, triggerSelector, panelSelector, exclusive) {
    var items = Array.prototype.slice.call(document.querySelectorAll(itemSelector));
    items.forEach(function (item) {
      var trigger = item.querySelector(triggerSelector);
      var panel = item.querySelector(panelSelector);
      if (!trigger || !panel) return;

      panel.style.maxHeight = '0px';

      trigger.addEventListener('click', function () {
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';

        if (exclusive && !isOpen) {
          items.forEach(function (other) {
            if (other === item) return;
            var otherTrigger = other.querySelector(triggerSelector);
            var otherPanel = other.querySelector(panelSelector);
            if (otherTrigger && otherPanel) setPanelOpen(otherTrigger, otherPanel, false);
          });
        }

        setPanelOpen(trigger, panel, !isOpen);
      });
    });

    // Keep open panels correctly sized on resize.
    window.addEventListener('resize', function () {
      items.forEach(function (item) {
        var trigger = item.querySelector(triggerSelector);
        var panel = item.querySelector(panelSelector);
        if (trigger && panel && trigger.getAttribute('aria-expanded') === 'true') {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  // Seção 7 — FAQ: exclusive, per PRD (abrir uma fecha a anterior).
  initAccordionGroup('.faq-item', '.faq-item__trigger', '.faq-item__panel', true);

  /* ============================================================
     Modal — Diagnóstico Gratuito
     Opens from any CTA on the page, focus-trapped, ESC / backdrop /
     close button all dismiss it.
     ============================================================ */
  var overlay = document.getElementById('modalOverlay');
  var modalDialog = document.getElementById('modalDialog');
  var modalClose = document.getElementById('modalClose');
  var form = document.getElementById('diagnosticoForm');
  var successView = document.getElementById('modalSuccess');
  var lastFocusedEl = null;

  function getFocusableEls() {
    return Array.prototype.slice.call(
      modalDialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) { return el.offsetParent !== null; });
  }

  function openModal(sourceEl) {
    lastFocusedEl = sourceEl || document.activeElement;
    overlay.hidden = false;
    // Force reflow so the transition runs.
    void overlay.offsetWidth;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    form.hidden = false;
    successView.hidden = true;

    var focusables = getFocusableEls();
    if (focusables.length) focusables[0].focus();

    document.addEventListener('keydown', onKeydown);
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);

    window.setTimeout(function () {
      overlay.hidden = true;
      if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
        lastFocusedEl.focus();
      }
    }, 240);
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
    if (e.key === 'Tab') {
      var focusables = getFocusableEls();
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  document.querySelectorAll('[data-modal-trigger]').forEach(function (trigger) {
    trigger.addEventListener('click', function () { openModal(trigger); });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Confirmação visual imediata, independente da integração de
      // back-end (CRM da LTX) estar pronta — critério de aceite do PRD.
      form.hidden = true;
      successView.hidden = false;
      var heading = successView.querySelector('.ltx-h4');
      if (heading) heading.focus();
    });
  }

  /* ============================================================
     Footer year
     ============================================================ */
  var footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = String(new Date().getFullYear());

})();
