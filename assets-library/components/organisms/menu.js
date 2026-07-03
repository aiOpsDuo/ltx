/**
 * menu.js
 * Handles the mobile menu toggle functionality for the Header Organism.
 * Accessibility: aria-expanded, aria-controls, close on Escape, close on click outside.
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.header-toggle');
  const navMenu = document.querySelector('.header-nav');

  if (!toggleBtn || !navMenu) return;

  // Garante que o nav tenha um ID para o aria-controls referenciar
  if (!navMenu.id) {
    navMenu.id = 'header-nav-menu';
  }

  // Configura atributos ARIA iniciais no botão toggle
  toggleBtn.setAttribute('aria-controls', navMenu.id);
  toggleBtn.setAttribute('aria-expanded', 'false');

  function openMenu() {
    navMenu.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navMenu.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function isMenuOpen() {
    return navMenu.classList.contains('is-open');
  }

  // Toggle ao clicar no botão hambúrguer
  toggleBtn.addEventListener('click', () => {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fecha o menu ao pressionar Escape e retorna o foco ao botão
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen()) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Fecha o menu ao clicar fora do header
  document.addEventListener('click', (e) => {
    if (isMenuOpen() && !e.target.closest('.header')) {
      closeMenu();
    }
  });
});
