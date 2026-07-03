<?php
/**
 * Component: Card
 * 
 * Arguments:
 * - title (string): Card title
 * - text (string): Card content/text
 * - image_url (string): Optional image URL
 * - badge_text (string): Optional badge text
 * - badge_type (string): Badge type (default: primary)
 * - icon (string): SVG or icon class (optional)
 * - extra_class (string): any additional classes
 */

$title = $args['title'] ?? '';
$text = $args['text'] ?? '';
$image_url = $args['image_url'] ?? '';
$badge_text = $args['badge_text'] ?? '';
$badge_type = $args['badge_type'] ?? 'accent';
$icon = $args['icon'] ?? '';
$extra_class = $args['extra_class'] ?? '';

$classes = ['card'];
if ( $extra_class ) {
    $classes[] = $extra_class;
}
$class_attr = esc_attr( implode( ' ', $classes ) );
?>
<div class="<?php echo $class_attr; ?>">
    <?php if ( $image_url ) : ?>
        <img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $title ); ?>" class="card-img-top">
    <?php elseif ( $icon ) : ?>
        <div class="icon">
            <?php echo $icon; // Allows SVG injection ?>
        </div>
    <?php endif; ?>

    <div class="card-body">
        <?php if ( $badge_text ) : ?>
            <?php get_template_part( 'template-parts/components/badge', null, ['text' => $badge_text, 'type' => $badge_type, 'extra_class' => 'card-category mb-4'] ); ?>
        <?php endif; ?>

        <?php if ( $title ) : ?>
            <h3 class="h4 card-title"><?php echo esc_html( $title ); ?></h3>
        <?php endif; ?>
        
        <?php if ( $text ) : ?>
            <p class="card-text"><?php echo wp_kses_post( $text ); ?></p>
        <?php endif; ?>
    </div>
</div>
