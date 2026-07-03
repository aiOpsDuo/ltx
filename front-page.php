<?php

/**
 * Template Name: Landing Page (Home)
 *
 * Arquitetura de página conforme PRD utilizando Agnostic Design System.
 */

get_header(); ?>

<main id="primary" class="site-main">

    <!-- 1. HERO SECTION -->
    <section class="hero showcase-section" id="hero">
        <div class="container hero-container">

            <div class="hero-content">
                <h1 class="hero-title h1">
                    Consultorias entregam relatório.<br>
                    Ferramentas entregam dados.<br>
                    A LTX entrega <span class="rotating-text">resultado</span>.
                </h1>

                <p class="hero-subtitle text-lead">
                    A LTX mostra o que fazer agora.
                </p>

                <div class="hero-actions">
                    <?php get_template_part('template-parts/components/button', null, [
                        'text' => 'Agendar Diagnóstico',
                        'url' => '#conversao',
                        'type' => 'primary',
                        'size' => 'lg'
                    ]); ?>
                </div>
            </div>

            <div class="hero-media">
                <!-- Glow effect -->
                <div class="hero-glow"></div>

                <!-- Left half video crop -->
                <div class="hero-video-wrapper">
                    <video
                        src="<?php echo esc_url(get_template_directory_uri() . '/assets/videos/top.mov'); ?>"
                        autoplay loop muted playsinline
                        class="hero-video"></video>
                </div>
            </div>
        </div>
    </section>


    <!-- 2. CREDIBILIDADE / PILARES -->
    <section class="features showcase-section" id="pilares">
        <div class="container">
            <div class="features-header text-center section-header">
                <h2 class="h2 features-title">Melhoramos expressivamente o resultado da sua operação através de 4 pilares:</h2>
            </div>
            <div class="features-grid">
                <?php 
                $pilares_fallback = [
                    ['titulo' => 'Pessoas', 'texto' => 'Alinhamento e capacitação do time para alta performance.'],
                    ['titulo' => 'Execução', 'texto' => 'Foco em disciplina e ritmo na operação diária.'],
                    ['titulo' => 'Clareza', 'texto' => 'Metas bem definidas e visibilidade de resultados.'],
                    ['titulo' => 'Processos', 'texto' => 'Padronização e melhoria contínua das rotinas.'],
                ];
                for ($i = 1; $i <= 4; $i++) :
                    $pilar_titulo = get_field('home_pilar_' . $i . '_titulo') ?: $pilares_fallback[$i-1]['titulo'];
                    $pilar_texto  = get_field('home_pilar_' . $i . '_texto') ?: $pilares_fallback[$i-1]['texto'];
                ?>
                        <div class="feature-item p-6 bg-surface border-dashed border-border rounded-lg">
                            <h3 class="h4 feature-item-title"><?php echo esc_html($pilar_titulo); ?></h3>
                            <p class="feature-item-desc"><?php echo esc_html($pilar_texto); ?></p>
                        </div>
                <?php
                endfor;
                ?>
            </div>
        </div>
    </section>

    <!-- 3. METODOLOGIA / DIFERENCIAL -->
    <section class="metodologia showcase-section bg-elevated" id="metodologia">
        <div class="container">
            <div class="text-center section-header">
                <h2 class="h2">Nossa Metodologia</h2>
                <p class="text-secondary text-lg">Um ciclo contínuo de evolução para a sua operação</p>
            </div>
            
            <div class="metodologia-wrapper">
                <div class="metodologia-grafico">
                    <div class="circulo-interativo">
                        <button class="quadrante q1 active" data-target="etapa-1" aria-label="Etapa 1: Diagnóstico">
                            <span class="q-num">1</span>
                            <span class="q-text">Diagnóstico</span>
                        </button>
                        <button class="quadrante q2" data-target="etapa-2" aria-label="Etapa 2: Padrão">
                            <span class="q-num">2</span>
                            <span class="q-text">Padrão</span>
                        </button>
                        <button class="quadrante q3" data-target="etapa-3" aria-label="Etapa 3: Medição">
                            <span class="q-num">3</span>
                            <span class="q-text">Medição</span>
                        </button>
                        <button class="quadrante q4" data-target="etapa-4" aria-label="Etapa 4: Desenvolvimento">
                            <span class="q-num">4</span>
                            <span class="q-text">Desenvolvimento</span>
                        </button>
                        <div class="circulo-centro">
                            <div class="centro-glow"></div>
                            <span class="centro-text">Ciclo<br>LTX</span>
                        </div>
                    </div>
                </div>

                <div class="metodologia-painel">
                    <?php 
                    $met_fallback = [
                        ['titulo' => 'Diagnóstico', 'texto' => 'Imersão na sua operação comercial para mapear gargalos, entender a cultura atual e identificar oportunidades de melhoria rápida.'],
                        ['titulo' => 'Padrão', 'texto' => 'Desenho e documentação dos processos ideais de vendas. Criamos os playbooks e definimos os scripts de cada etapa do funil.'],
                        ['titulo' => 'Medição', 'texto' => 'Implementação de indicadores-chave (KPIs) e dashboards em tempo real para que você tenha o controle da sua operação na palma da mão.'],
                        ['titulo' => 'Desenvolvimento', 'texto' => 'Treinamento contínuo, roleplays e capacitação do seu time para garantir a execução com excelência e evolução constante.']
                    ];
                    for ($i = 1; $i <= 4; $i++) :
                        $met_titulo = get_field('home_metodologia_' . $i . '_titulo') ?: $met_fallback[$i-1]['titulo'];
                        $met_texto  = get_field('home_metodologia_' . $i . '_texto') ?: $met_fallback[$i-1]['texto'];
                    ?>
                        <div id="etapa-<?php echo $i; ?>" class="metodologia-info <?php echo $i === 1 ? 'active' : ''; ?>">
                            <span class="etapa-badge text-xs font-bold text-brand-primary">ETAPA <?php echo $i; ?></span>
                            <h3 class="h3 etapa-titulo mb-2"><?php echo esc_html($met_titulo); ?></h3>
                            <p class="etapa-texto text-secondary"><?php echo esc_html($met_texto); ?></p>
                        </div>
                    <?php endfor; ?>
                </div>
            </div>

            <div class="metodologia__cta text-center mt-12 metodologia-cta">
                <?php get_template_part('template-parts/components/button', null, [
                    'text' => 'Quero meu Diagnóstico Gratuito',
                    'url' => '#conversao',
                    'type' => 'primary',
                    'size' => 'lg'
                ]); ?>
            </div>
        </div>
    </section>

    <!-- 4. TECNOLOGIA X -->
    <section class="tecnologia showcase-section" id="tecnologia">
        <div class="container tecnologia-container">
            <?php
            $tec_titulo = get_field('home_tecx_titulo') ?: 'Sua operação em uma única tela';
            $tec_texto  = get_field('home_tecx_texto') ?: 'A Tecnologia LTX centraliza todos os dados do seu CRM e ERP. Você toma decisões baseadas em dados, não em achismos. Acompanhe a performance do seu time em tempo real.';
            $tec_print  = get_field('home_tecx_print');
            ?>
            <div class="tecnologia__conteudo tecnologia-conteudo">
                <h2 class="h2 tecnologia-title"><?php echo esc_html($tec_titulo); ?></h2>
                <p class="tecnologia__texto text-secondary tecnologia-texto"><?php echo wp_kses_post($tec_texto); ?></p>
                <div class="tecnologia-actions mt-6">
                    <?php get_template_part('template-parts/components/button', null, [
                        'text' => 'Quero ver na prática',
                        'url' => '#conversao',
                        'type' => 'secondary'
                    ]); ?>
                </div>
            </div>
            <div class="tecnologia__print tecnologia-print">
                <?php if ($tec_print) : ?>
                    <img
                        src="<?php echo esc_url($tec_print['url']); ?>"
                        alt="<?php echo esc_attr($tec_print['alt']); ?>"
                        class="tecnologia-img">
                <?php else: ?>
                    <div class="tecnologia-placeholder bg-surface border-dashed border-border rounded-lg d-flex align-items-center justify-content-center" style="aspect-ratio: 16/9;">
                        <span class="text-secondary text-sm">Imagem da Plataforma (Cadastre no ACF)</span>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- 5. DEPOIMENTOS -->
    <section class="depoimentos showcase-section bg-elevated" id="depoimentos">
        <div class="container">
            <h2 class="h2 text-center section-title">Depoimentos</h2>
            <div class="depoimentos__grid depoimentos-grid">
                <?php
                $depoimentos_query = new WP_Query(array(
                    'post_type'      => 'depoimentos',
                    'posts_per_page' => -1,
                ));

                if ($depoimentos_query->have_posts()) :
                    while ($depoimentos_query->have_posts()) : $depoimentos_query->the_post();
                        $dep_nome       = get_field('depoimentos_nome') ?: get_the_title();
                        $dep_midia_tipo = get_field('depoimentos_midia_tipo');
                        $dep_imagem     = get_field('depoimentos_imagem');
                        $dep_video      = get_field('depoimentos_video');
                        $dep_texto      = get_field('depoimentos_texto');

                        $image_url = ($dep_midia_tipo === 'imagem' && $dep_imagem) ? $dep_imagem['url'] : '';

                        get_template_part('template-parts/components/card', null, [
                            'title' => '- ' . $dep_nome,
                            'text' => '"' . $dep_texto . '"',
                            'image_url' => $image_url,
                            'badge_text' => 'Cliente',
                            'badge_type' => 'success'
                        ]);
                    endwhile;
                    wp_reset_postdata();
                else :
                    $fallback_deps = [
                        ['nome' => 'Empresa A', 'texto' => 'A LTX transformou a forma como enxergamos nosso funil de vendas. Crescimento de 40% em 3 meses.'],
                        ['nome' => 'Empresa B', 'texto' => 'Finalmente temos clareza sobre o que cada vendedor precisa fazer. O processo é simples e funciona.'],
                        ['nome' => 'Empresa C', 'texto' => 'Os indicadores em tempo real mudaram nosso jogo. Saímos do achismo para a gestão orientada a dados.']
                    ];
                    foreach ($fallback_deps as $dep) {
                        get_template_part('template-parts/components/card', null, [
                            'title' => '- ' . $dep['nome'],
                            'text' => '"' . $dep['texto'] . '"',
                            'badge_text' => 'Cliente',
                            'badge_type' => 'success'
                        ]);
                    }
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- 6. QUEM ESTÁ POR TRÁS -->
    <section class="founders showcase-section" id="founders">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="h2 section-title mb-4">Quem está por trás</h2>
                <p class="text-lg text-secondary">A LTX foi criada por quem entende os dois lados da mesa: vendas e tecnologia.</p>
            </div>
            <div class="founders__grid founders-grid">
                <?php
                $mentores_query = new WP_Query(array(
                    'post_type'      => 'mentores',
                    'posts_per_page' => -1,
                ));

                if ($mentores_query->have_posts()) :
                    while ($mentores_query->have_posts()) : $mentores_query->the_post();
                        $mentor_nome  = get_field('mentores_nome') ?: get_the_title();
                        $mentor_foto  = get_field('mentores_foto');
                        $mentor_cargo = get_field('mentores_cargo');
                        $mentor_texto = get_field('mentores_texto');

                        get_template_part('template-parts/components/card', null, [
                            'title' => $mentor_nome,
                            'text' => $mentor_texto,
                            'image_url' => $mentor_foto ? $mentor_foto['url'] : '',
                            'badge_text' => $mentor_cargo,
                            'badge_type' => 'primary',
                            'extra_class' => 'text-center'
                        ]);
                    endwhile;
                    wp_reset_postdata();
                else:
                    $fallback_mentores = [
                        ['nome' => 'Tiago', 'cargo' => 'Co-founder', 'texto' => 'Especialista em estruturação de processos comerciais e gestão de alta performance.'],
                        ['nome' => 'Leonardo', 'cargo' => 'Co-founder', 'texto' => 'Engenheiro de software focado em criar soluções que trazem visibilidade e controle.']
                    ];
                    foreach ($fallback_mentores as $mentor) {
                        get_template_part('template-parts/components/card', null, [
                            'title' => $mentor['nome'],
                            'text' => $mentor['texto'],
                            'badge_text' => $mentor['cargo'],
                            'badge_type' => 'primary',
                            'extra_class' => 'text-center'
                        ]);
                    }
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- 7. FAQ -->
    <section class="faq showcase-section bg-elevated" id="faq">
        <div class="container container-sm">
            <h2 class="h2 text-center section-title">Perguntas Frequentes</h2>
            <div class="faq__accordion">
                <?php 
                $faq_fallback = [
                    ['pergunta' => 'Para qual tamanho de empresa a LTX é indicada?', 'resposta' => 'Atendemos operações que já possuem um time de vendas estruturado (mínimo de 3 vendedores) e faturam a partir de R$ 100k/mês.'],
                    ['pergunta' => 'Preciso trocar meu CRM atual?', 'resposta' => 'Não. Nossa tecnologia se integra aos principais CRMs do mercado para extrair e consolidar os dados.'],
                    ['pergunta' => 'Qual é o tempo médio de implementação?', 'resposta' => 'O diagnóstico e a estruturação inicial levam de 2 a 4 semanas. A partir daí, iniciamos o acompanhamento contínuo.'],
                    ['pergunta' => 'A LTX treina meu time?', 'resposta' => 'Sim. O desenvolvimento do time (roleplays, capacitação) é um dos nossos 4 pilares de atuação.'],
                    ['pergunta' => 'Como funciona o acompanhamento?', 'resposta' => 'Realizamos reuniões semanais de cadência e temos um canal de suporte contínuo para garantir que a execução não saia dos trilhos.']
                ];
                
                $tem_faq = false;
                for ($i = 1; $i <= 6; $i++) {
                    $faq_pergunta = get_field('home_faq_' . $i . '_pergunta');
                    $faq_resposta = get_field('home_faq_' . $i . '_resposta');
                    if ($faq_pergunta && $faq_resposta) {
                        $tem_faq = true;
                        get_template_part('template-parts/components/accordion', null, [
                            'title' => $faq_pergunta,
                            'content' => $faq_resposta
                        ]);
                    }
                }
                
                if (!$tem_faq) {
                    foreach ($faq_fallback as $faq) {
                        get_template_part('template-parts/components/accordion', null, [
                            'title' => $faq['pergunta'],
                            'content' => $faq['resposta']
                        ]);
                    }
                }
                ?>
            </div>
        </div>
    </section>

    <!-- 8. CTA FINAL (CONVERSÃO) -->
    <section class="conversao showcase-section border-none bg-showcase" id="conversao">
        <div class="container container-xs">
            <h2 class="h2 conversao-title">O que sua operação comercial está deixando de enxergar hoje?</h2>
            <p class="conversao__subtitulo text-secondary conversao-subtitulo">Preencha o formulário e a LTX entrará em contato para agendar o seu diagnóstico. Sem custo. Sem compromisso. Você recebe retorno em até 24h úteis.</p>

            <div class="conversao-box">
                <?php get_template_part('template-parts/form', 'conversao'); ?>
            </div>
        </div>
    </section>

</main>

<?php get_footer();
