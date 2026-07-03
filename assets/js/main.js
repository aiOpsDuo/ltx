document.addEventListener('DOMContentLoaded', function() {
    
    const formConversao = document.getElementById('form-conversao');

    if (formConversao) {
        formConversao.addEventListener('submit', function(e) {
            e.preventDefault();

            const form     = this;
            const btn      = form.querySelector('[type="submit"]');
            const feedback = document.getElementById('form-feedback');

            btn.disabled    = true;
            btn.textContent = 'Enviando…';
            feedback.textContent = '';
            feedback.className = 'form-conversao__feedback';

            const data = new FormData(form);
            data.append('action', 'enviar_conversao');

            fetch(duoAjax.ajaxurl, {
                method: 'POST',
                body: data,
            })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    feedback.textContent = res.data.mensagem;
                    feedback.classList.add('form-conversao__feedback--sucesso');
                    form.reset();
                } else {
                    feedback.textContent = res.data.mensagem || 'Erro ao enviar. Tente novamente.';
                    feedback.classList.add('form-conversao__feedback--erro');
                }
            })
            .catch(() => {
                feedback.textContent = 'Falha na conexão. Verifique sua internet e tente novamente.';
                feedback.classList.add('form-conversao__feedback--erro');
            })
            .finally(() => {
                btn.disabled    = false;
                btn.textContent = 'Quero me inscrever';
            });
        });
    }

});
