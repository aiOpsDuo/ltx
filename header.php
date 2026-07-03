<?php
/**
 * Header do tema Duo
 *
 * Contém: DOCTYPE, <head>, abertura do <body> e navegação principal.
 * Chamado via get_header() em todos os templates.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> data-theme="dark">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <link rel="icon" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/icon.png" sizes="32x32" />
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="siteHeader">
  <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="text-decoration: none;" aria-label="Home">
    <svg class="logo" viewBox="0 0 776 194" xmlns="http://www.w3.org/2000/svg" aria-label="LTX">
      <path class="ink" d="M0 194V0.114439H22.793V172.396H122.105V194H0Z"/>
      <path class="ink" d="M338.739 194V21.7188H283.385V0.114439H416.887V21.7188H361.532V194H338.739Z"/>
      <path class="ink" d="M570.809 194H596.038L643.131 98.4307V94.9971L596.038 0H570.809L618.463 94.9971V98.4307L570.809 194Z"/>
      <path class="accent" d="M776 192.855H751.332L708.164 107.015H732.927L776 192.855Z"/>
      <path class="accent" d="M732.64 86.413H708.485L708.164 85.8407L751.332 0H776L732.64 86.413Z"/>
    </svg>
  </a>
  <nav>
    <a href="#pilares">O problema</a>
    <a href="#tecnologia">Tecnologia X</a>
    <a href="#metodologia">Gestão</a>
    <a href="#faq">Dúvidas</a>
  </nav>
  <div class="header-actions">
    <?php get_template_part('template-parts/components/button', null, [
        'text' => 'Diagnóstico Gratuito',
        'url' => '#conversao',
        'type' => 'primary',
        'size' => 'md',
        'extra_class' => 'header-cta-btn'
    ]); ?>
    <button class="theme-toggle" id="themeToggle" aria-label="Alternar tema"></button>
  </div>
</header>
