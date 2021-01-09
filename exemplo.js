let jogo = new CobrasEscadas();
let jogoEstatico = false;

if(jogoEstatico){
    jogo.jogar(1,2);
}else{
    jogo.jogar(jogo.jogarDado(), jogo.jogarDado());
}

function resetarJogo() {
    localStorage.setItem('posicaoJogadorA', 0);
    localStorage.setItem('posicaoJogadorB', 0);
    document.location.reload(true);
}

function tabela() {

    function mostrarJogador(casaAtual) {
        let posicaoPogadorA = localStorage.getItem('posicaoJogadorA');
        let posicaoPogadorB = localStorage.getItem('posicaoJogadorB');

        if (casaAtual == posicaoPogadorA) {
            return `<div class="jogadorA"></div>`;
        }
        else if (casaAtual == posicaoPogadorB) {
            return `<div class="jogadorB"></div>`;
        }
        else if ((casaAtual == posicaoPogadorA) && (casaAtual == posicaoPogadorB)) {
            return `<div class="jogadorA"></div><div class="jogadorB"></div>`;
        }
        else {
            return '<div class="jogadorN"></div>';
        }
    }


    let template = `<div id="tabuleiro">`;
    for (let i = 100; i >= 1; i--) {
        template += `<div class="casa" id="id_casa-${i}">
           ${mostrarJogador(i)}
          <h4>${i}</h4>
        </div>`;

    }
    template += `</div>`;
    if (document.getElementById('tabela')) {
        document.getElementById('tabela').innerHTML = template;
    }
}
tabela('tabela');



