<?php
/**
 * Footer do tema Duo
 *
 * Contém: rodapé, fechamento do <body>.
 * Chamado via get_footer() em todos os templates.
 */
?>

<footer class="site-footer">
    <div class="container">
        <p>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. Todos os direitos reservados.</p>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
