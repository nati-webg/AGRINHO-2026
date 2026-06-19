// AGRINHO 2026 - JavaScript


document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso!");
  
    const botao = document.querySelector("#botao");

    if (botao) {
        botao.addEventListener("click", () => {
            alert("Bem-vindo ao projeto Agrinho 2026!");
        });
    }
});
<script src="script.js"></script>
