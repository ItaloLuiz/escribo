# Escribo - Teste Técnico 02

- Implemente a parte lógica do jogo indiano ["Cobras e Escadas"](https://en.wikipedia.org/wiki/Snakes_and_ladders)

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

- Ao baixar o projeto no index.html tem dois botões que podem ser usados
    para jogar.
- Caso queira testar sem os números aleatórios basta fazer o seguinte
    retirar o comentário da variavel inicio e setar os dois valores.
- Caso queira testar clicanco nos botões comente a veriavel inicio.  

## Jogando com valores fixos

- Abra arquivo jogoEstatico.html e clique no link: atualizar página
- Esse arquivo chama o exemplo.js com os dados fixos, melhor para executar
  os testes;

```JAVASCRIPT
 let inicio = jogo.jogar(1,1);
 let inicio = jogo.jogar(primeiroDado,segundoDado);
```
