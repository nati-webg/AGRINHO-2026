// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Validação e envio do formulário
    const formContato = document.getElementById('formContato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            // Validação simples
            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            if (!validarEmail(email)) {
                alert('Por favor, insira um e-mail válido!');
                return;
            }
            
            // Simulação de envio
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato pelo e-mail ${email}.`);
            
            // Limpar formulário
            formContato.reset();
        });
    }
    
    // Função para validar e-mail
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Efeito de scroll suave nos links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animação ao rolar a página
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todas as seções
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Efeito de digitação no header (opcional)
    const titulo = document.querySelector('header h1');
    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = '';
        let i = 0;
        
        function digitarTexto() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(digitarTexto, 100);
            }
        }
        
        // Iniciar animação após 1 segundo
        setTimeout(digitarTexto, 1000);
    }
    
    // Mensagem no console
    console.log('🌱 Agro Forte - Futuro Sustentável carregado com sucesso!');
});
