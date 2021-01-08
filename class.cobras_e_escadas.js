class CobrasEscadas {

    constructor(posicaoEscadas, posicaoCobras) {
        this.posicoesEspeciais = [
            [2, 38], [7, 14], [8, 31], [15, 26], [21, 42], [28, 84], [36, 44], [51, 67], [71, 91], [78, 98], [87, 94],
            [16, 6], [7, 14], [46, 25], [49, 11], [62, 19], [64, 60], [74, 53], [89, 68], [92, 88], [95, 75], [99, 80]
        ];
    }

    inicioJogo() {
        localStorage.setItem('inicioJogo', 0);
        localStorage.setItem('finalJogo', 100);
        localStorage.setItem('posicaoJogadorA', 0);
        localStorage.setItem('posicaoJogadorB', 0);
        localStorage.setItem('quemJoga', 'jogadorA');
    }

    jogarPrimeiroDado() {
        let jogarDado = Math.floor(Math.random() * 6 + 1);
        return jogarDado;
    }

    jogarSegundoDado() {
        let jogarDado = Math.floor(Math.random() * 6 + 1);
        return jogarDado;
    }

    mudarCasa(nomeJogador, posicaoJogador, posicao) {
        var getPosicao = localStorage.getItem(posicaoJogador);
        for (let i = 0; i < this.posicoesEspeciais.length; i++) {
            let posicaoAtual = parseInt(getPosicao) + parseInt(posicao);
            if (parseInt(getPosicao) === this.posicoesEspeciais[i][0]) {
                localStorage.setItem(posicaoJogador, this.posicoesEspeciais[i][1]);
                break;
            } else {
                if (posicaoAtual > 100) {
                    //console.log('maior que 100 ' + (posicaoAtual - parseInt(posicao + 1)));
                    posicaoAtual = (posicaoAtual - parseInt(posicao + 1));
                }
                localStorage.setItem(posicaoJogador, posicaoAtual);
                continue;
            }
        }
    }

    jogar(dado1, dado2) {

        let somaDados = dado1 + dado2;

        let pontosJogadorA = localStorage.getItem('posicaoJogadorA');
        let pontosJogadorB = localStorage.getItem('posicaoJogadorB');
        let quemJogou = localStorage.getItem('quemJoga');

        document.getElementById('casaJogadorA').innerHTML = `<b>${pontosJogadorA}</b>`;
        document.getElementById('casaJogadorB').innerHTML = `<b>${pontosJogadorB}</b>`;

        if ((pontosJogadorA == 100) || (pontosJogadorB == 100)) {
            //console.log('O jogo acabou!');
            let msgResultado = '<p><b>O jogo acabou!</b></p>';
            

            if (pontosJogadorA == 100) {
                console.log('Jogador A Venceu!');
                msgResultado += '<p><b>Jogador A Venceu!</b></p>';
            }
            if (pontosJogadorB == 100) {
                //console.log('Jogador B Venceu!');
                msgResultado += '<p><b>Jogador B Venceu!</b></p>';
            }
            document.getElementById('resultado').innerHTML = msgResultado;           
            return false;
        }


        if ((!pontosJogadorA) && (!pontosJogadorB)) {
            this.inicioJogo();
        }


        if (quemJogou == 'jogadorA') {
            this.mudarCasa('jogadorA', 'posicaoJogadorA', somaDados);
            if (dado1 == dado2) {
                localStorage.setItem('quemJoga', 'jogadorA');
            } else {
                localStorage.setItem('quemJoga', 'jogadorB');
            }
        } else {
            this.mudarCasa('jogadorB', 'posicaoJogadorB', somaDados);
            if (dado1 == dado2) {
                localStorage.setItem('quemJoga', 'jogadorB');
            } else {
                localStorage.setItem('quemJoga', 'jogadorA');
            }
        }

    }
}

