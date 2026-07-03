document.addEventListener('DOMContentLoaded', () => {
  // Header glass on scroll
  const header = document.getElementById('siteHeader');
  if(header) {
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
      });
  }

  // Dark/light toggle
  const themeToggle = document.getElementById('themeToggle');
  if(themeToggle) {
      themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      });
  }

  // Hero Rotating text
  const words = ["resultado", "performance", "gestão", "visibilidade", "execução", "processos", "clareza"];
  let i = 0;
  const el = document.querySelector('.rotating-text');
  if(el) {
      setInterval(() => {
          el.style.opacity = 0;
          setTimeout(() => {
              i = (i + 1) % words.length;
              el.innerText = words[i];
              el.style.opacity = 1;
          }, 300); // Wait for fade out before changing text
      }, 2500); // Change every 2.5 seconds
  }

  // Metodologia Interactive Circle
  const quadrantes = document.querySelectorAll('.quadrante');
  const paineisInfo = document.querySelectorAll('.metodologia-info');

  if (quadrantes.length > 0 && paineisInfo.length > 0) {
      quadrantes.forEach(btn => {
          btn.addEventListener('click', () => {
              // Remove active from all
              quadrantes.forEach(q => q.classList.remove('active'));
              paineisInfo.forEach(p => p.classList.remove('active'));

              // Add active to clicked
              btn.classList.add('active');
              
              // Show target panel
              const targetId = btn.getAttribute('data-target');
              const targetPanel = document.getElementById(targetId);
              if (targetPanel) {
                  targetPanel.classList.add('active');
              }
          });
      });
  }

  // FAQ Accordion Exclusivity
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
      item.addEventListener('toggle', (event) => {
          if (item.open) {
              faqItems.forEach(otherItem => {
                  if (otherItem !== item && otherItem.open) {
                      otherItem.removeAttribute('open');
                  }
              });
          }
      });
  });
});
