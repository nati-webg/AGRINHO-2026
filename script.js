// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================================
    // 1. BANCO DE DADOS E CONFIGURAÇÃO DO QUIZ INTERATIVO
    // =========================================================================
    const perguntasQuiz = [
        {
            pergunta: "Qual dessas tecnologias é muito usada para mapear áreas de desmatamento e monitorar a saúde das plantas em tempo real?",
            opcoes: ["Tratores mecânicos", "Drones de precisão", "Enxadas manuais", "Aspersores convencionais"],
            correta: 1
        },
        {
            pergunta: "O que caracteriza a prática de irrigação inteligente de alta tecnologia?",
            opcoes: ["Molhar o campo o dia todo continuamente", "Uso de sensores de solo para liberar água apenas no momento e quantidade exatos", "Depender exclusivamente da chuva", "Inundar as valas de terra"],
            correta: 1
        },
        {
            pergunta: "Qual o principal benefício da Agricultura Regenerativa para o planeta?",
            opcoes: ["Esgotar os nutrientes do solo rapidamente", "Substituir toda a vegetação nativa por concreto", "Recuperar a saúde do solo biodiversificado e fixar carbono", "Eliminar o uso de qualquer tipo de dados"],
            correta: 2
        }
    ];

    let perguntaAtualIdx = 0;
    let pontuacaoFinal = 0;

    const elementoPergunta = document.getElementById('quiz-pergunta');
    const elementoOpcoes = document.getElementById('quiz-opcoes');
    const elementoCardQuiz = document.getElementById('quiz-card');
    const elementoResultadoQuiz = document.getElementById('quiz-resultado');

    function renderizarQuiz() {
        // Garante de forma estrita que os elementos existem na tela antes de injetar o texto
        if (!elementoPergunta || !elementoOpcoes) {
            console.error("⚠️ Erro: Elementos do HTML do quiz não foram encontrados pelo JS.");
            return;
        }

        if (perguntaAtualIdx < perguntasQuiz.length) {
            const dadosQuestao = perguntasQuiz[perguntaAtualIdx];
            elementoPergunta.textContent = `${perguntaAtualIdx + 1}. ${dadosQuestao.pergunta}`;
            elementoOpcoes.innerHTML = '';

            dadosQuestao.opcoes.forEach((opcao, idx) => {
                const btn = document.createElement('button');
                btn.className = 'quiz-btn';
                btn.textContent = opcao;
                btn.addEventListener('click', () => checarRespostaQuiz(idx, btn));
                elementoOpcoes.appendChild(btn);
            });
        } else {
            exibirResultadoFinalQuiz();
        }
    }

    function checarRespostaQuiz(idxSelecionado, botaoClicado) {
        const botoes = elementoOpcoes.querySelectorAll('.quiz-btn');
        botoes.forEach(b => b.setAttribute('disabled', 'true')); // Trava cliques extras de segurança

        const respostaCorretaIdx = perguntasQuiz[perguntaAtualIdx].correta;

        if (idxSelecionado === respostaCorretaIdx) {
            botaoClicado.classList.add('correta');
            pontuacaoFinal++;
        } else {
            botaoClicado.classList.add('incorreta');
            if (botoes[respostaCorretaIdx]) {
                botoes[respostaCorretaIdx].classList.add('correta'); // Destaca a correta caso erre
            }
        }

        // Aguarda 1.8 segundos para o usuário ver a cor e muda suavemente de pergunta
        setTimeout(() => {
            perguntaAtualIdx++;
            renderizarQuiz();
        }, 1800);
    }

    function exibirResultadoFinalQuiz() {
        if (elementoCardQuiz && elementoResultadoQuiz) {
            elementoCardQuiz.classList.add('hidden');
            elementoResultadoQuiz.classList.remove('hidden');

            let medalha = "🌱 Bronze";
            if (pontuacaoFinal === 3) medalha = "🥇 Ouro Sustentável";
            else if (pontuacaoFinal === 2) medalha = "🥈 Prata Tecnológica";

            elementoResultadoQuiz.innerHTML = `
                <h4>Quiz Concluído!</h4>
                <p>Você acertou <strong>${pontuacaoFinal} de ${perguntasQuiz.length}</strong> questões.</p>
                <p>Sua Classificação: <strong>${medalha}</strong></p>
                <button class="quiz-reiniciar" id="btn-reiniciar-quiz" style="margin-top: 15px;">Refazer Quiz</button>
            `;

            document.getElementById('btn-reiniciar-quiz').addEventListener('click', reiniciarQuiz);
        }
    }

    function reiniciarQuiz() {
        perguntaAtualIdx = 0;
        pontuacaoFinal = 0;
        if (elementoResultadoQuiz && elementoCardQuiz) {
            elementoResultadoQuiz.classList.add('hidden');
            elementoCardQuiz.classList.remove('hidden');
            renderizarQuiz();
        }
    }

    // Inicialização forçada do Quiz com segurança
    try {
        renderizarQuiz();
    } catch (erro) {
        console.error("Falha ao iniciar o renderizador do quiz:", erro);
    }

    // =========================================================================
    // 2. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
    // =========================================================================
    const formContato = document.getElementById('formContato');
    const formFeedback = document.getElementById('form-feedback');
    
    if (formContato && formFeedback) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (nome === '' || email === '' || mensagem === '') {
                exibirFeedback('Por favor, preencha todos os campos do formulário!', 'error');
                return;
            }
            
            if (!validarEmail(email)) {
                exibirFeedback('O formato do e-mail inserido é inválido!', 'error');
                return;
            }
            
            exibirFeedback(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Retornaremos em: ${email}.`, 'success');
            formContato.reset();
        });
    }
    
    function exibirFeedback(mensagem, tipo) {
        if (formFeedback) {
            formFeedback.textContent = mensagem;
            formFeedback.className = `form-feedback ${tipo}`;
            formFeedback.classList.remove('hidden');
            formFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // =========================================================================
    // 3. EFEITOS VISUAIS PREMIUM (SCROLL, REVELAÇÃO E DIGITAÇÃO)
    // =========================================================================
    
    // Scroll Suave Premium
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const hrefAttr = this.getAttribute('href');
            if (hrefAttr === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(hrefAttr);
            if (target) {
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Observador de Rolagem das Seções (IntersectionObserver)
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Prepara e monitora as seções sem quebrar caso o JS demore
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        observer.observe(section);
    });
    
    // Efeito Maquina de Escrever (Typewriter) no Header
    const titulo = document.querySelector('header h1');
    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = '';
        let i = 0;
        
        function digitarTexto() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(digitarTexto, 60);
            }
        }
        setTimeout(digitarTexto, 500);
    }
    
    console.log('🌌 Agro Forte - Sistema corrigido e rodando perfeitamente!');
});
