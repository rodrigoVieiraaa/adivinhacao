// Declara as variáveis
var numeroEscolhido;
var chute;
var tentativas;
var apenasNumeros;

// Atribui as variáveis iniciais
numeroEscolhido = Math.floor(Math.random() * 1001);
tentativas = 1;

// Função que verifica se o número é valido
function verificarInput(apenasNumeros) {
  return /^\d+$/.test(apenasNumeros);
}

// Laço de repetição do jogo
while (chute != numeroEscolhido) {
  // Pergunta o número ao usuário
  chute = prompt(
    "Digite um número de 1 à 1000.\n\nSua tentativa é a de número: " +
      tentativas +
      "."
  );

  // Verifica se foi digitado um número válido
  if (!verificarInput(chute) || chute < 0 || chute > 1000 || chute == 0) {
    alert("Você digitou um número inválido!");
    continue;
  }

  if (chute == numeroEscolhido) {
    alert(
      "Parabéns, você descobriu! O número era " +
        numeroEscolhido +
        " e você precisou de " +
        tentativas +
        " tentativas!"
    );
    break;
  } else if (tentativas >= 13) {
    alert("Você perdeu! O número era " + numeroEscolhido + ".");
    break;
  } else if (chute > numeroEscolhido) {
    alert("O número escolhido é menor que " + chute + "!");
  } else if (chute < numeroEscolhido) {
    alert("O número escolhido é maior que " + chute + "!");
  }

  tentativas++;
}
