<?php
/**
 * Fallback template
 */

get_header(); ?>

<main id="primary" class="site-main">
    <div class="container">
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) :
                the_post();
                the_title( '<h1>', '</h1>' );
                the_content();
            endwhile;
        else :
            echo '<p>Nenhum conteúdo encontrado.</p>';
        endif;
        ?>
    </div>
</main>

<?php
get_footer();
