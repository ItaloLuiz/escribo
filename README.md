# Escribo - Teste Técnico 02

- Implemente a parte lógica do jogo indiano ["Cobras e Escadas"](https://en.wikipedia.org/wiki/Snakes_and_ladders)

## Classe Principal

- Coloquei outros arquivos nessa branch para apresentar algo visual,
  o arquivo relacionado ao que foi solicitado no teste é a classe:
  class.cobras_e_escadas.js
- Obrigado !

## Descrição

- Sua tarefa é fazer uma simples classe chamada "CobrasEscadas"
- Essa classe deve ter um método "jogar" que recebe as variáveis
  "dado1" e "dado2",e que pode ser chamado independente do estado
  do jogo ou qual dos jogadores está na vez.
- As variáveis "dado1" e "dado2" são os valores dos dados jogados
  pelo jogador naquele momento e ambos são inteiros entre 1 e 6.
  O jogador irá se mover "dado1+dado2" casas na sua vez.
- Retorne a frase "Jogador X Venceu!" quando um jogador for vitorioso.
  Onde X é um jogador vitorioso que chegou na casa 100 sem nenhum
  movimento sobrando.
- Retorne a frase "O jogo acabou!" se algum jogador já tiver vencido
  o jogo e o outro jogador tentar chamar o método "jogar".
- Em qualquer outro caso, retorne "Jogador X está na casa Y".
  Onde X é o jogador atual e Y é a casa em que ele estará
  ao finalizar sua jogada.

## Como jogar

### Jogando no arquivo index.html

- No arquivo index.html possui três botões: jogadorA, JogadorB e Resetar Jogo
- Quando um jogador faz sua jogada o botão do outro é sesativado
- Ao clicar em resetar Jogo o localstorage é limpo.
- Nessa página os valores das jogadas são feitas de forma randômica.

### Jogando no arquivo jogoEstatico.html

- Nesse arquivo as jogadas podem ser de forma fixa, ou seja, setando os valores manualmente,
  para isso basta setar a variável jogoEstatico para true.
- Para jogar com dados aleatórios basta setar a mesma variável para false.
- Essa variável esta no arquivo: exemplo.js

```JAVASCRIPT
 let jogo = new CobrasEscadas();
 /*Jogo com dados fixos*/
 let inicio = jogo.jogar(1,1);
 /*Jogo com dados aleatórios*/
 let inicio = jogo.jogar(jogo.jogarDado(),jogo.jogarDado());
```
