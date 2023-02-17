// criando um objeto/vector
var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 3, empates: 1, derrotas: 2, pontos: 0 };
var ricardo = {
  nome: "Ricardo",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
};

//criando a funcao passando jogador
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates; //calculando pontos
  return pontos;
}
rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
ricardo.pontos = calculaPontos(ricardo);

//criando lista de jogadores
var jogadores = [rafa, paulo, ricardo];

//funcao para passa os valores para tabela/tela
function exibeJogadoresNaTela(jogadores) {
  var elemento = ""; // criando elemento para receber linhas
  for (var i = 0; i < jogadores.length; i++) {
    //length para pega o tamanho total

    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  //crinado uma variavel para receber o ID do HTML
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}
