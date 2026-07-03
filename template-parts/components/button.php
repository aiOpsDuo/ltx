<?php
/**
 * Component: Button
 * 
 * Arguments:
 * - text (string): Button text
 * - url (string): Button URL (if empty, renders a button tag instead of a tag)
 * - type (string): primary, outline, text, etc (default: primary)
 * - size (string): sm, lg, or empty (default: empty)
 * - extra_class (string): any additional classes
 */

$text = $args['text'] ?? '';
$url = $args['url'] ?? '';
$type = $args['type'] ?? 'primary';
$size = $args['size'] ?? '';
$extra_class = $args['extra_class'] ?? '';

$classes = ['btn', $type];
if ( $size ) {
    $classes[] = 'btn-' . $size;
}
if ( $extra_class ) {
    $classes[] = $extra_class;
}

$class_attr = esc_attr( implode( ' ', $classes ) );

if ( $url ) {
    echo '<a href="' . esc_url( $url ) . '" class="' . $class_attr . '">' . esc_html( $text ) . '</a>';
} else {
    echo '<button class="' . $class_attr . '">' . esc_html( $text ) . '</button>';
}
