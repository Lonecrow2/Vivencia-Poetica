let navbarContent = `
  <nav>
    <div class="navprin">
      <h1 class="navprin_h1">PÁGINAS</h1>
      <ol class="navprin_ol">
        <a href="pag12.html" rel="internal"><li>Pag</li></a>

        <a href="pag11.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag10.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag9.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag8.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag7.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag6.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag5.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag4.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag3.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag2.html" rel="internal"><li>Pag</li></a>
        
        <a href="pag1.html" rel="internal"><li>Pag</li></a>
        
      </ol>
    </div>
  </nav>
`
document.getElementById('navbar').innerHTML = navbarContent;

// Verificar o estado do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const estadoAtual = localStorage.getItem('modoLeitura');
    if (estadoAtual === 'ativo') {
      aplicarModoLeitura();
    }
  });


// Executa automaticamente quando o DOM for totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Verifica se o Modo Leitura está ativo no localStorage
  const estadoAtual = localStorage.getItem('modoLeitura');
  if (estadoAtual === 'ativo') {
    // Aplica os estilos de Modo Leitura aos elementos de fundo
    let all_fundos = document.querySelectorAll('.align4 div, .align6 div, .align7 div, .align8 div');
      all_fundos.forEach(fundo_p => {
        fundo_p.style.backgroundColor = "#474747";
        fundo_p.style.textShadow = "none";
      });

    // Aplica os estilos de Modo Leitura aos textos
    let all_cor = document.querySelectorAll('main p');
      all_cor.forEach(cor_p => {
        cor_p.style.color = "white";
        cor_p.style.textShadow = "none";
      });

    // Altera a borda do elemento main
    let main_cor = document.querySelector('body main');
      main_cor.style.border = "7px solid #646464";

    // Altera os estilos do corpo da página
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = '#141414';
  }
});

// Variável de controle para alternar o estado do Modo Leitura
let modoLeituraAtivo = false;

function leitura() {
  if (!modoLeituraAtivo) {
    // Ativa o Modo Leitura

    // Aplica a borda cinza ao elemento main
    let main_cor = document.querySelector('body main');
      main_cor.style.border = "7px solid #646464";

    // Aplica estilos de Modo Leitura aos fundos
    let all_fundos = document.querySelectorAll('.align4 div, .align6 div, .align7 div, .align8 div');
      all_fundos.forEach(fundo_p => {
        fundo_p.style.backgroundColor = "#474747";
        fundo_p.style.textShadow = "none";
      });

    // Aplica estilos de Modo Leitura aos textos
    let all_cor = document.querySelectorAll('main p');
      all_cor.forEach(cor_p => {
        cor_p.style.color = "white";
        cor_p.style.textShadow = "none";
      });

    // Altera os estilos do corpo da página
    document.body.style.backgroundImage = "none"; // Remove a imagem de fundo
    document.body.style.backgroundColor = '#141414';

    // Salva no localStorage que o Modo Leitura está ativo
    localStorage.setItem('modoLeitura', 'ativo');
  } else {
    // Desativa o Modo Leitura
    // Reverte os estilos dos fundos para o padrão
      let all_fundos = document.querySelectorAll('.align4 div, .align6 div, .align7 div, .align8 div');
        all_fundos.forEach(fundo_p => {
          fundo_p.style.backgroundColor = "#2020209d";
        });

    // Reverte a borda do elemento main
    let main_cor = document.querySelector('body main');
      main_cor.style.border = "7px solid #dda534";

    // Reverte os estilos dos textos para o padrão
    let all_cor = document.querySelectorAll('main p');
      all_cor.forEach(cor_p => {
        cor_p.style.color = "#ffd88a";
        cor_p.style.textShadow = "2px 2px 4px black";
      });

    // Reverte os estilos do corpo da página para o padrão
    document.body.style.backgroundImage = "url('../Imagens/background/body-layout.jpg')"; // Imagem original
    document.body.style.color = '';

    // Remove o estado salvo no localStorage
    localStorage.removeItem('modoLeitura');
  }

  // Alterna o estado de modoLeituraAtivo
  modoLeituraAtivo = !modoLeituraAtivo;
}
