/* =========================================================
   AGRO FORTE
   JAVASCRIPT DO SITE
========================================================= */

document.addEventListener('DOMContentLoaded', function () {


    /* =====================================================
       PERGUNTAS DO QUIZ
    ====================================================== */

    const perguntasQuiz = [

        {
            pergunta:
                "Qual dessas tecnologias é muito usada para mapear áreas de desmatamento e monitorar a saúde das plantas em tempo real?",

            opcoes: [
                "Tratores mecânicos",
                "Drones de precisão",
                "Enxadas manuais",
                "Aspersores convencionais"
            ],

            correta: 1
        },


        {
            pergunta:
                "O que caracteriza a prática de irrigação inteligente de alta tecnologia?",

            opcoes: [
                "Molhar o campo o dia todo continuamente",
                "Uso de sensores de solo para liberar água apenas no momento e quantidade exatos",
                "Depender exclusivamente da chuva",
                "Inundar as valas de terra"
            ],

            correta: 1
        },


        {
            pergunta:
                "Qual o principal benefício da Agricultura Regenerativa para o planeta?",

            opcoes: [
                "Esgotar os nutrientes do solo rapidamente",
                "Substituir toda a vegetação nativa por concreto",
                "Recuperar a saúde do solo biodiversificado e fixar carbono",
                "Eliminar o uso de qualquer tipo de dados"
            ],

            correta: 2
        }

    ];


    /* =====================================================
       VARIÁVEIS DO QUIZ
    ====================================================== */

    let perguntaAtualIdx = 0;

    let pontuacaoFinal = 0;


    /* =====================================================
       ELEMENTOS DO HTML
    ====================================================== */

    const elementoPergunta =
        document.getElementById('quiz-pergunta');

    const elementoOpcoes =
        document.getElementById('quiz-opcoes');

    const elementoCardQuiz =
        document.getElementById('quiz-card');

    const elementoResultadoQuiz =
        document.getElementById('quiz-resultado');


    /* =====================================================
       RENDERIZAR QUIZ
    ====================================================== */

    function renderizarQuiz() {

        if (!elementoPergunta || !elementoOpcoes) {
            return;
        }


        if (perguntaAtualIdx < perguntasQuiz.length) {

            const dadosQuestao =
                perguntasQuiz[perguntaAtualIdx];


            elementoPergunta.textContent =
                `${perguntaAtualIdx + 1}. ${dadosQuestao.pergunta}`;


            elementoOpcoes.innerHTML = '';


            dadosQuestao.opcoes.forEach(
                (opcao, idx) => {

                    const btn =
                        document.createElement('button');


                    btn.className =
                        'quiz-btn';


                    btn.textContent =
                        opcao;


                    btn.type =
                        'button';


                    btn.addEventListener(
                        'click',
                        function () {

                            checarRespostaQuiz(
                                idx,
                                btn
                            );

                        }
                    );


                    elementoOpcoes.appendChild(btn);

                }
            );


        } else {

            exibirResultadoFinalQuiz();

        }

    }


    /* =====================================================
       VERIFICAR RESPOSTA
    ====================================================== */

    function checarRespostaQuiz(
        idxSelecionado,
        botaoClicado
    ) {

        const botoes =
            elementoOpcoes.querySelectorAll(
                '.quiz-btn'
            );


        botoes.forEach(
            b =>
                b.setAttribute(
                    'disabled',
                    'true'
                )
        );


        const respostaCorretaIdx =
            perguntasQuiz[
                perguntaAtualIdx
            ].correta;


        if (
            idxSelecionado ===
            respostaCorretaIdx
        ) {

            botaoClicado.classList.add(
                'correta'
            );

            pontuacaoFinal++;


        } else {

            botaoClicado.classList.add(
                'incorreta'
            );


            if (
                botoes[respostaCorretaIdx]
            ) {

                botoes[
                    respostaCorretaIdx
                ].classList.add(
                    'correta'
                );

            }

        }


        setTimeout(
            () => {

                perguntaAtualIdx++;

                renderizarQuiz();

            },
            1200
        );

    }


    /* =====================================================
       RESULTADO FINAL
    ====================================================== */

    function exibirResultadoFinalQuiz() {

        if (
            elementoCardQuiz &&
            elementoResultadoQuiz
        ) {

            elementoCardQuiz.classList.add(
                'hidden'
            );

            elementoResultadoQuiz.classList.remove(
                'hidden'
            );


            let medalha =
                "🌱 Bronze";


            if (
                pontuacaoFinal === 3
            ) {

                medalha =
                    "🥇 Ouro Sustentável";

            } else if (
                pontuacaoFinal === 2
            ) {

                medalha =
                    "🥈 Prata Tecnológica";

            }


            elementoResultadoQuiz.innerHTML = `

                <h4>
                    Quiz Concluído!
                </h4>

                <p style="margin: 10px 0;">

                    Você acertou

                    <strong>
                        ${pontuacaoFinal}
                        de
                        ${perguntasQuiz.length}
                    </strong>

                    questões.

                </p>

                <p>

                    Sua Classificação:

                    <strong>
                        ${medalha}
                    </strong>

                </p>

                <button
                    class="quiz-reiniciar"
                    id="btn-reiniciar-quiz"
                    type="button"
                >
                    Refazer Quiz
                </button>

            `;


            const botaoReiniciar =
                document.getElementById(
                    'btn-reiniciar-quiz'
                );


            if (botaoReiniciar) {

                botaoReiniciar.addEventListener(
                    'click',
                    reiniciarQuiz
                );

            }

        }

    }


    /* =====================================================
       REINICIAR QUIZ
    ====================================================== */

    function reiniciarQuiz() {

        perguntaAtualIdx = 0;

        pontuacaoFinal = 0;


        if (
            elementoResultadoQuiz &&
            elementoCardQuiz
        ) {

            elementoResultadoQuiz.classList.add(
                'hidden'
            );

            elementoCardQuiz.classList.remove(
                'hidden'
            );

            renderizarQuiz();

        }

    }


    /* =====================================================
       INICIAR QUIZ
    ====================================================== */

    renderizarQuiz();


    /* =====================================================
       FORMULÁRIO DE CONTATO
    ====================================================== */

    const formContato =
        document.getElementById(
            'formContato'
        );


    const formFeedback =
        document.getElementById(
            'form-feedback'
        );


    if (
        formContato &&
        formFeedback
    ) {

        formContato.addEventListener(
            'submit',
            function (e) {

                e.preventDefault();


                const nome =
                    document
                        .getElementById('nome')
                        .value
                        .trim();


                const email =
                    document
                        .getElementById('email')
                        .value
                        .trim();


                formFeedback.textContent =
                    `Obrigado, ${nome}! Mensagem enviada com sucesso para o e-mail ${email}.`;


                formFeedback.className =
                    'form-feedback success';


                formFeedback.classList.remove(
                    'hidden'
                );


                formContato.reset();

            }
        );

    }

});
