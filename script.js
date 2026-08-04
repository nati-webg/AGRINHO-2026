/* Importação corrigida das fontes do Google Fonts */
@import url('https://googleapis.com');

/* Configurações Gerais e Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Kanit', sans-serif !important;
    line-height: 1.7;
    color: #f1f1f1 !important;
    background-color: #0b071e !important; /* Fundo Dark Espacial */
    overflow-x: hidden;
}

/* Barra de Navegação Fixa Moderna */
.navbar {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: rgba(11, 7, 30, 0.85) !important;
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(138, 43, 226, 0.15) !important;
    z-index: 1000;
    display: flex;
    align-items: center;
}

.nav-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'Comfortaa', cursive !important;
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff !important;
    text-decoration: none;
    background: linear-gradient(90deg, #4dadff, #8a2be2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links a {
    font-family: 'Comfortaa', cursive !important;
    color: #b3b3cc !important;
    text-decoration: none;
    margin-left: 1.2rem;
    font-size: 0.9rem;
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #4dadff !important;
}

/* Header Moderno com Gradiente */
header {
    margin-top: 70px !important; /* Compensação da barra fixa */
    background: linear-gradient(135deg, #1e0b36 0%, #0b071e 100%) !important;
    border-bottom: 1px solid rgba(138, 43, 226, 0.2) !important;
    padding: 3.5rem 2rem;
    text-align: center;
    position: relative;
}

header h1 {
    font-family: 'Caveat', cursive !important; /* Estilo Lettering Escrito à Mão */
    font-size: 4.5rem !important; /* Maior para destacar o lettering */
    font-weight: 700;
    background: linear-gradient(90deg, #4dadff, #8a2be2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
}

header p {
    color: #b3b3cc !important;
    font-size: 1.2rem;
    max-width: 600px;
    margin: auto;
    font-weight: 300;
}

/* Estrutura das Seções */
section {
    padding: 4rem 2rem !important;
    max-width: 1000px;
    margin: 2rem auto !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
    border-radius: 16px !important;
    backdrop-filter: blur(10px);
}

/* Títulos das Seções */
h2 {
    font-family: 'Comfortaa', cursive !important; /* Lettering arredondado moderno */
    font-size: 2.2rem !important;
    font-weight: 700;
    color: #4dadff !important;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
}

h2::after {
    content: '';
    display: block;
    width: 45px;
    height: 4px;
    background: #8a2be2;
    border-radius: 2px;
    margin-top: 8px;
}

/* Hero Section */
.hero {
    background: radial-gradient(circle at top right, rgba(138, 43, 226, 0.15), transparent) !important;
    border: 1px solid rgba(138, 43, 226, 0.2) !important;
    text-align: center;
}

.hero img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0 10px 30px rgba(138, 43, 226, 0.3);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero img:hover {
    transform: scale(1.03) translateY(-5px);
}

/* Listas Customizadas */
ul {
    list-style: none;
}

li {
    margin: 1rem 0;
    padding-left: 1.8rem;
    position: relative;
    font-size: 1.05rem;
}

li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #8a2be2;
    font-weight: bold;
}

/* Grid com Efeito de Vidro (Glassmorphism) */
.grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 25px;
    margin-top: 2rem;
}

.grid-item {
    background: rgba(255, 255, 255, 0.03) !important;
    padding: 25px !important;
    border-radius: 12px !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    transition: all 0.3s ease;
}

.grid-item:hover {
    transform: translateY(-8px);
    background: rgba(138, 43, 226, 0.05) !important;
    border-color: rgba(138, 43, 226, 0.4) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.grid-item img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}

.grid-item h3 {
    font-family: 'Comfortaa', cursive !important;
    font-size: 1.4rem;
    font-weight: 700;
    color: #ffffff !important;
    margin-bottom: 0.8rem;
}

.grid-item p {
    color: #b3b3cc !important;
    font-size: 0.95rem;
    font-weight: 300;
}

/* Estilos Exclusivos do Quiz Avançado */
.quiz-container {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(138, 43, 226, 0.15);
    border-radius: 12px;
    padding: 25px;
    margin-top: 1.5rem;
}

.quiz-card h3 {
    font-family: 'Comfortaa', cursive;
    color: #fff;
    margin-bottom: 1.2rem;
    font-size: 1.25rem;
}

.quiz-opcoes {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.quiz-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    padding: 14px;
    border-radius: 8px;
    font-family: 'Kanit', sans-serif;
    font-size: 1rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
}

.quiz-btn:hover:not([disabled]) {
    background: rgba(77, 173, 255, 0.1);
    border-color: #4dadff;
    padding-left: 20px;
}

.quiz-btn.correta {
    background: rgba(46, 204, 113, 0.2) !important;
    border-color: #2ecc71 !important;
    color: #2ecc71;
    font-weight: bold;
}

.quiz-btn.incorreta {
    background: rgba(231, 76, 60, 0.2) !important;
    border-color: #e74c3c !important;
    color: #e74c3c;
}

.quiz-resultado {
    text-align: center;
    padding: 20px;
    animation: fadeIn 0.5s ease;
}

.quiz-resultado h4 {
    font-family: 'Comfortaa', cursive;
    font-size: 1.8rem;
    color: #4dadff;
    margin-bottom: 10px;
}

.quiz-resultado p {
    font-size: 1.2rem;
    color: #b3b3cc;
    margin-bottom: 1.5rem;
}

/* Utilitários Globais */
.hidden { display: none !important; }

/* Feedbacks Estilizados In-Page (Substitutos do Alert) */
.form-feedback {
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: 1rem;
    font-weight: 600;
    animation: fadeIn 0.4s ease;
}

.form-feedback.success {
    background: rgba(46, 204, 113, 0.15);
    border: 1px solid #2ecc71;
    color: #2ecc71;
}

.form-feedback.error {
    background: rgba(231, 76, 60, 0.15);
    border: 1px solid #e74c3c;
    color: #e74c3c;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}

/* Formulário Avançado */
#contato input, #contato textarea {
    font-family: 'Kanit', sans-serif !important;
    display: block;
    width: 100%;
    margin: 15px 0;
    padding: 16px;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 8px;
    font-size: 16px;
    color: #fff !important;
    transition: all 0.3s ease;
}

#contato input:focus, #contato textarea:focus {
    outline: none;
    border-color: #4dadff !important;
    background: rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 0 10px rgba(77, 173, 255, 0.2);
}

#contato button, .quiz-reiniciar {
    font-family: 'Comfortaa', cursive !important;
    background: linear-gradient(90deg, #8a2be2, #4dadff) !important;
    color: white !important;
    border: none;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.4);
    transition: all 0.3s ease;
}

.quiz-reiniciar {
    max-width: 250px;
    margin: 0 auto;
}

#contato button:hover, .quiz-reiniciar:hover {
    filter: brightness(1.2);
    box-shadow: 0 6px 20px rgba(77, 173, 255, 0.5);
    transform: translateY(-2px);
}

/* Rodapé */
footer {
    background: #060411 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
    color: #666680 !important;
    text-align: center;
    padding: 2rem;
    margin-top: 4rem;
    font-size: 0.95rem;
    font-weight: 300;
}

/* Responsividade Básica */
@media (max-width: 768px) {
    header h1 { font-size: 3.2rem !important; }
    section { padding: 2.5rem 1.5rem !important; margin: 1rem !important; }
    .grid { grid-template-columns: 1fr !important; }
    .nav-links { display: none; } /* Oculta links em telas muito pequenas para focar no conteúdo */
}
