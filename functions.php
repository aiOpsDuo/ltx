<?php
/**
 * Duo — functions.php
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/* =============================================================================
   1. CONFIGURAÇÕES BÁSICAS
   ============================================================================= */

function duo_configuracoes_basicas() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );

    register_nav_menus( array(
        'menu-principal' => 'Menu Principal',
        'menu-rodape'    => 'Menu do Rodapé',
    ) );

    add_filter( 'acf/settings/save_json', function() {
        return get_stylesheet_directory() . '/acf-json';
    } );
    add_filter( 'acf/settings/load_json', function( $paths ) {
        $paths[] = get_stylesheet_directory() . '/acf-json';
        return $paths;
    } );
}
add_action( 'after_setup_theme', 'duo_configuracoes_basicas' );

function duo_uppercase_title_parts( $title ) {
    foreach ( $title as $key => $part ) {
        $title[$key] = mb_strtoupper( $part, 'UTF-8' );
    }
    return $title;
}
add_filter( 'document_title_parts', 'duo_uppercase_title_parts' );

/* =============================================================================
   2. LIMPEZA DO <HEAD>
   ============================================================================= */

function duo_limpeza_head() {
    remove_action( 'wp_head', 'wp_generator' );
    remove_action( 'wp_head', 'rsd_link' );
    remove_action( 'wp_head', 'wlwmanifest_link' );
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
}
add_action( 'init', 'duo_limpeza_head' );

/* =============================================================================
   3. ENQUEUE DE ESTILOS E SCRIPTS
   ============================================================================= */

function duo_enqueue_assets() {
    // Design System (Agnostic Library)
    wp_enqueue_style(
        'duo-design-system',
        get_template_directory_uri() . '/assets-library/main.css',
        array(),
        wp_get_theme()->get( 'Version' )
    );

    // Theme Custom Styles
    wp_enqueue_style(
        'duo-style',
        get_stylesheet_uri(),
        array('duo-design-system'),
        wp_get_theme()->get( 'Version' )
    );

    wp_enqueue_style(
        'duo-front-page-style',
        get_template_directory_uri() . '/assets/css/front-page.css',
        array('duo-style'),
        wp_get_theme()->get( 'Version' )
    );

    wp_enqueue_script(
        'duo-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );

    wp_enqueue_script(
        'duo-front-page-script',
        get_template_directory_uri() . '/assets/js/front-page.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );

    wp_localize_script( 'duo-script', 'duoAjax', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'duo_nonce' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'duo_enqueue_assets' );

/* =============================================================================
   4. CPTs (Custom Post Types)
   ============================================================================= */

// CPT: Depoimentos
function duo_registrar_cpt_depoimentos() {
    $labels = array(
        'name'          => 'Depoimentos',
        'singular_name' => 'Depoimento',
        'menu_name'     => 'Depoimentos',
        'add_new'       => 'Adicionar Novo',
        'add_new_item'  => 'Adicionar Novo Depoimento',
        'edit_item'     => 'Editar Depoimento',
        'all_items'     => 'Todos os Depoimentos',
        'search_items'  => 'Buscar Depoimentos',
        'not_found'     => 'Nenhum depoimento encontrado.',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'depoimentos' ),
        'capability_type'    => 'post',
        'has_archive'        => false, 
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-format-quote',
        'supports'           => array( 'title' ),
        'show_in_rest'       => true,
    );
    register_post_type( 'depoimentos', $args );
}
add_action( 'init', 'duo_registrar_cpt_depoimentos' );

// CPT: Mentores
function duo_registrar_cpt_mentores() {
    $labels = array(
        'name'          => 'Mentores',
        'singular_name' => 'Mentor',
        'menu_name'     => 'Mentores',
        'add_new'       => 'Adicionar Novo',
        'add_new_item'  => 'Adicionar Novo Mentor',
        'edit_item'     => 'Editar Mentor',
        'all_items'     => 'Todos os Mentores',
        'search_items'  => 'Buscar Mentores',
        'not_found'     => 'Nenhum mentor encontrado.',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'mentores' ),
        'capability_type'    => 'post',
        'has_archive'        => false, 
        'hierarchical'       => false,
        'menu_position'      => 6,
        'menu_icon'          => 'dashicons-businessman',
        'supports'           => array( 'title' ),
        'show_in_rest'       => true,
    );
    register_post_type( 'mentores', $args );
}
add_action( 'init', 'duo_registrar_cpt_mentores' );

/* =============================================================================
   5. ACF — Grupos de campos
   ============================================================================= */

// ACF para Depoimentos
function duo_campos_acf_depoimentos() {
    if ( ! function_exists( 'acf_add_local_field_group' ) ) return;

    acf_add_local_field_group( array(
        'key'    => 'group_depoimentos_campos',
        'title'  => 'Campos do Depoimento',
        'fields' => array(
            array(
                'key'   => 'field_depoimentos_nome',
                'label' => 'Nome',
                'name'  => 'depoimentos_nome',
                'type'  => 'text',
            ),
            array(
                'key'           => 'field_depoimentos_midia_tipo',
                'label'         => 'Tipo de Mídia',
                'name'          => 'depoimentos_midia_tipo',
                'type'          => 'radio',
                'choices'       => array(
                    'imagem' => 'Imagem',
                    'video'  => 'Vídeo',
                ),
                'default_value' => 'imagem',
                'layout'        => 'horizontal',
            ),
            array(
                'key'           => 'field_depoimentos_imagem',
                'label'         => 'Imagem do Depoimento',
                'name'          => 'depoimentos_imagem',
                'type'          => 'image',
                'return_format' => 'array',
                'preview_size'  => 'medium',
                'conditional_logic' => array(
                    array(
                        array(
                            'field'    => 'field_depoimentos_midia_tipo',
                            'operator' => '==',
                            'value'    => 'imagem',
                        ),
                    ),
                ),
            ),
            array(
                'key'   => 'field_depoimentos_video',
                'label' => 'Vídeo (YouTube/Vimeo)',
                'name'  => 'depoimentos_video',
                'type'  => 'oembed',
                'conditional_logic' => array(
                    array(
                        array(
                            'field'    => 'field_depoimentos_midia_tipo',
                            'operator' => '==',
                            'value'    => 'video',
                        ),
                    ),
                ),
            ),
            array(
                'key'   => 'field_depoimentos_texto',
                'label' => 'Texto do Depoimento',
                'name'  => 'depoimentos_texto',
                'type'  => 'textarea',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'depoimentos',
                ),
            ),
        ),
    ) );
}
add_action( 'acf/init', 'duo_campos_acf_depoimentos' );

// ACF para Mentores
function duo_campos_acf_mentores() {
    if ( ! function_exists( 'acf_add_local_field_group' ) ) return;

    acf_add_local_field_group( array(
        'key'    => 'group_mentores_campos',
        'title'  => 'Campos do Mentor',
        'fields' => array(
            array(
                'key'   => 'field_mentores_nome',
                'label' => 'Nome',
                'name'  => 'mentores_nome',
                'type'  => 'text',
            ),
            array(
                'key'           => 'field_mentores_foto',
                'label'         => 'Foto',
                'name'          => 'mentores_foto',
                'type'          => 'image',
                'return_format' => 'array',
                'preview_size'  => 'medium',
            ),
            array(
                'key'   => 'field_mentores_cargo',
                'label' => 'Cargo',
                'name'  => 'mentores_cargo',
                'type'  => 'text',
            ),
            array(
                'key'   => 'field_mentores_texto',
                'label' => 'Texto sobre o Mentor',
                'name'  => 'mentores_texto',
                'type'  => 'wysiwyg',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'mentores',
                ),
            ),
        ),
    ) );
}
add_action( 'acf/init', 'duo_campos_acf_mentores' );

// ACF para Landing Page (Home)
function duo_campos_acf_home() {
    if ( ! function_exists( 'acf_add_local_field_group' ) ) return;

    $fields = array(
        // === SEÇÃO 1: HERO ===
        array(
            'key'   => 'field_home_hero_titulo',
            'label' => 'Hero Título',
            'name'  => 'home_hero_titulo',
            'type'  => 'text',
        ),
        array(
            'key'   => 'field_home_hero_subtitulo',
            'label' => 'Hero Subtítulo',
            'name'  => 'home_hero_subtitulo',
            'type'  => 'textarea',
            'rows'  => 2,
        ),
        array(
            'key'           => 'field_home_hero_imagem',
            'label'         => 'Hero Imagem / Grafismo',
            'name'          => 'home_hero_imagem',
            'type'          => 'image',
            'return_format' => 'array',
        ),

        // === SEÇÃO 2: PILARES ===
        array(
            'key'   => 'field_home_pilares_tab',
            'label' => 'Pilares',
            'type'  => 'tab',
        )
    );

    for ( $i = 1; $i <= 4; $i++ ) {
        $fields[] = array(
            'key'   => 'field_home_pilar_' . $i . '_titulo',
            'label' => 'Pilar ' . $i . ' - Título',
            'name'  => 'home_pilar_' . $i . '_titulo',
            'type'  => 'text',
        );
        $fields[] = array(
            'key'   => 'field_home_pilar_' . $i . '_texto',
            'label' => 'Pilar ' . $i . ' - Texto',
            'name'  => 'home_pilar_' . $i . '_texto',
            'type'  => 'textarea',
            'rows'  => 3,
        );
    }

    // === SEÇÃO 3: METODOLOGIA ===
    $fields[] = array(
        'key'   => 'field_home_metodologia_tab',
        'label' => 'Metodologia',
        'type'  => 'tab',
    );
    for ( $i = 1; $i <= 4; $i++ ) {
        $fields[] = array(
            'key'   => 'field_home_metodologia_' . $i . '_titulo',
            'label' => 'Etapa ' . $i . ' - Título',
            'name'  => 'home_metodologia_' . $i . '_titulo',
            'type'  => 'text',
        );
        $fields[] = array(
            'key'   => 'field_home_metodologia_' . $i . '_texto',
            'label' => 'Etapa ' . $i . ' - Texto',
            'name'  => 'home_metodologia_' . $i . '_texto',
            'type'  => 'textarea',
            'rows'  => 3,
        );
    }

    // === SEÇÃO 4: TECNOLOGIA X ===
    $fields[] = array(
        'key'   => 'field_home_tecx_tab',
        'label' => 'Tecnologia X',
        'type'  => 'tab',
    );
    $fields[] = array(
        'key'   => 'field_home_tecx_titulo',
        'label' => 'Tecnologia X - Título',
        'name'  => 'home_tecx_titulo',
        'type'  => 'text',
    );
    $fields[] = array(
        'key'   => 'field_home_tecx_texto',
        'label' => 'Tecnologia X - Texto',
        'name'  => 'home_tecx_texto',
        'type'  => 'textarea',
        'rows'  => 4,
    );
    $fields[] = array(
        'key'           => 'field_home_tecx_print',
        'label'         => 'Tecnologia X - Print',
        'name'          => 'home_tecx_print',
        'type'          => 'image',
        'return_format' => 'array',
    );

    // === SEÇÃO 7: FAQ ===
    $fields[] = array(
        'key'   => 'field_home_faq_tab',
        'label' => 'FAQ',
        'type'  => 'tab',
    );
    for ( $i = 1; $i <= 6; $i++ ) {
        $fields[] = array(
            'key'   => 'field_home_faq_' . $i . '_pergunta',
            'label' => 'FAQ ' . $i . ' - Pergunta',
            'name'  => 'home_faq_' . $i . '_pergunta',
            'type'  => 'text',
        );
        $fields[] = array(
            'key'   => 'field_home_faq_' . $i . '_resposta',
            'label' => 'FAQ ' . $i . ' - Resposta',
            'name'  => 'home_faq_' . $i . '_resposta',
            'type'  => 'textarea',
            'rows'  => 3,
        );
    }

    acf_add_local_field_group( array(
        'key'    => 'group_home_campos',
        'title'  => 'Conteúdos da Home',
        'fields' => $fields,
        'location' => array(
            array(
                array(
                    'param'    => 'page_template',
                    'operator' => '==',
                    'value'    => 'front-page.php',
                ),
            ),
        ),
    ) );
}
add_action( 'acf/init', 'duo_campos_acf_home' );

/* =============================================================================
   6. Formulários — Handler AJAX
   ============================================================================= */

function duo_processar_conversao() {

    // 1. Honeypot: se o campo "website" veio preenchido → é bot
    if ( ! empty( $_POST['website'] ) ) {
        wp_send_json_success( array( 'mensagem' => 'Obrigado por se inscrever!' ) );
    }

    // 2. Nonce
    if ( ! isset( $_POST['conversao_nonce'] ) || ! wp_verify_nonce( $_POST['conversao_nonce'], 'enviar_conversao_action' ) ) {
        wp_send_json_error( array( 'mensagem' => 'Requisição inválida. Recarregue a página e tente novamente.' ) );
    }

    // 3. Validação de campo obrigatório
    if ( empty( $_POST['nome'] ) || empty( $_POST['email'] ) || empty( $_POST['telefone'] ) ) {
        wp_send_json_error( array( 'mensagem' => 'Por favor, preencha todos os campos obrigatórios.' ) );
    }

    // 4. Sanitização
    $nome     = sanitize_text_field( $_POST['nome'] );
    $email    = sanitize_email( $_POST['email'] );
    $telefone = sanitize_text_field( $_POST['telefone'] );

    // 5. Validação de formato
    if ( ! is_email( $email ) ) {
        wp_send_json_error( array( 'mensagem' => 'O e-mail informado não é válido.' ) );
    }

    // 6. Montagem e envio do e-mail
    $para    = get_option( 'admin_email' );
    $assunto = 'Nova conversão na Landing Page — ' . $nome;
    $corpo   = sprintf(
        "Nome: %s\nE-mail: %s\nTelefone: %s",
        $nome,
        $email,
        $telefone
    );
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . get_bloginfo( 'name' ) . ' <no-reply@' . wp_parse_url( home_url(), PHP_URL_HOST ) . '>',
        'Reply-To: ' . $nome . ' <' . $email . '>',
    );

    if ( wp_mail( $para, $assunto, $corpo, $headers ) ) {
        wp_send_json_success( array( 'mensagem' => 'Inscrição realizada com sucesso! Retornaremos em breve.' ) );
    } else {
        wp_send_json_error( array( 'mensagem' => 'Não foi possível enviar a mensagem no momento. Tente novamente mais tarde.' ) );
    }
}
add_action( 'wp_ajax_enviar_conversao',        'duo_processar_conversao' );
add_action( 'wp_ajax_nopriv_enviar_conversao', 'duo_processar_conversao' );
