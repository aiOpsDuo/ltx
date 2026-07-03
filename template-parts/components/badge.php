<?php
/**
 * Component: Badge
 * 
 * Arguments:
 * - text (string): Badge text
 * - type (string): primary, success, warning, error, info (default: primary)
 * - extra_class (string): any additional classes
 */

$text = $args['text'] ?? '';
$type = $args['type'] ?? 'accent';
$extra_class = $args['extra_class'] ?? '';

$classes = ['badge', $type];
if ( $extra_class ) {
    $classes[] = $extra_class;
}

$class_attr = esc_attr( implode( ' ', $classes ) );
?>
<span class="<?php echo $class_attr; ?>"><?php echo esc_html( $text ); ?></span>
