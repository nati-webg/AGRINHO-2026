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
            
            // Simulação de envio bem-sucedido
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\nEntraremos em contato pelo e-mail: ${email}.`);
            
            // Limpar formulário de forma segura
            formContato.reset();
        });
    }
    
    // Função auxiliar com Regex para validar e-mail
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Efeito de scroll suave premium nos links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const hrefAttr = this.getAttribute('href');
            
            // Se for apenas "#", ignora o prevent Default para não quebrar comportamento padrão
            if (hrefAttr === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(hrefAttr);
            if (target) {
                // Compensação da altura da barra de navegação fixa (80px)
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Configurações do Observador de Rolagem (IntersectionObserver)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ativa a animação injetando os estilos diretamente de forma suave
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Para de observar o elemento após a animação acontecer uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Inicializar e observar todas as seções do site
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        observer.observe(section);
    });
    
    // Efeito de digitação (Typewriter) premium no título principal
    const titulo = document.querySelector('header h1');
    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = '';
        let i = 0;
        
        function digitarTexto() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(digitarTexto, 70);
            }
        }
        
        // Dispara o efeito após um leve delay de carregamento (600ms)
        setTimeout(digitarTexto, 600);
    }
    
    console.log('🌌 Agro Forte - Interface Neon Futurista carregada com sucesso!');
});
