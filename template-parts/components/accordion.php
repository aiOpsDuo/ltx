<?php
/**
 * Component: Accordion (FAQ Item)
 * 
 * Arguments:
 * - title (string): Accordion title (summary)
 * - content (string): Accordion content
 */

$title = $args['title'] ?? '';
$content = $args['content'] ?? '';

if ( empty( $title ) && empty( $content ) ) {
    return;
}
?>
<details class="faq-item">
    <summary class="faq-item__pergunta">
        <?php echo esc_html( $title ); ?>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="accordion-icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </summary>
    <div class="faq-item__resposta">
        <?php echo wp_kses_post( $content ); ?>
    </div>
</details>
