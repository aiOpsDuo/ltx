<?php
/**
 * Template Part: Formulário de Conversão
 */
?>

<form
    class="form-conversao"
    id="form-conversao"
    method="post"
    novalidate
    aria-label="Formulário de conversão"
>
    <?php
    wp_nonce_field( 'enviar_conversao_action', 'conversao_nonce' );
    ?>

    <!-- HONEYPOT -->
    <div style="display: none;" aria-hidden="true">
        <label for="website">Deixe este campo em branco</label>
        <input type="text" name="website" id="website" tabindex="-1" autocomplete="off">
    </div>

    <div class="form-conversao__grupo">
        <label for="conversao-nome" class="form-conversao__label">
            Nome <span aria-label="obrigatório">*</span>
        </label>
        <input
            type="text"
            id="conversao-nome"
            name="nome"
            class="form-conversao__input"
            required
            autocomplete="name"
        >
    </div>

    <div class="form-conversao__grupo">
        <label for="conversao-email" class="form-conversao__label">
            E-mail <span aria-label="obrigatório">*</span>
        </label>
        <input
            type="email"
            id="conversao-email"
            name="email"
            class="form-conversao__input"
            required
            autocomplete="email"
        >
    </div>

    <div class="form-conversao__grupo">
        <label for="conversao-telefone" class="form-conversao__label">
            Telefone <span aria-label="obrigatório">*</span>
        </label>
        <input
            type="tel"
            id="conversao-telefone"
            name="telefone"
            class="form-conversao__input"
            required
            autocomplete="tel"
        >
    </div>

    <div class="form-conversao__feedback" id="form-feedback" role="alert" aria-live="polite"></div>

    <button type="submit" class="form-conversao__submit">Quero me inscrever</button>
</form>
