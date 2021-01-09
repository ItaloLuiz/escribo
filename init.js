let jogo = new CobrasEscadas();

//let inicio = jogo.jogar(1,1);
//let inicio = jogo.jogar(primeiroDado,segundoDado);

document.getElementById('jogadorB').disabled = true;

function resetarJogo() {
    localStorage.setItem('posicaoJogadorA', 0);
    localStorage.setItem('posicaoJogadorB', 0);
    document.location.reload(true);
}

function jogarDados(jogador) {    

    if (jogador == 'jogadorA') {
        document.getElementById('jogadorB').disabled = false;
        document.getElementById('jogadorA').disabled = true;
        jogo.jogar(jogo.jogarDado(), jogo.jogarDado());
    }

    if (jogador == 'jogadorB') {
        document.getElementById('jogadorB').disabled = true;
        document.getElementById('jogadorA').disabled = false;
        jogo.jogar(jogo.jogarDado(), jogo.jogarDado());
    }

}  