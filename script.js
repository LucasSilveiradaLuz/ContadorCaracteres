function contadorCaractere() {
  let text = document.form_main.text.value;
  // pegando os elementos pelo id para serem utilizados 

  document.getElementById('caracteres').innerText = text.length == 0 ? 0: text.replace(/\s/g, "").length;
  // o de caracteres usamos /\s/g  para pegar todos os elementos e ignorar os espaços em brancos g é para global 
   
  let palavras = text.trim().split(/\s+/).filter(palavra => palavra.length > 0);
  document.getElementById('palavras').innerText = text.length == 0 ? 0 : palavras.length;
    // Conta as palavras. O método .split() divide a string em um array.
  // A expressão regular /\s+/ usa \s (qualquer espaço em branco) e + (uma ou mais vezes)
  // para separar o texto em palavras. O .length conta quantos itens o array  possui.
 // . filter filtra todas as palavras com valor maior que 0, ou seja ignora espaços vazios 

  document.getElementById('linhas').innerText = text.length == 0 ? 0 : text.split(/\n/).length;
// Conta as linhas. O método .split() divide a string a cada ocorrência de \n,
  // que é o caractere invisível que representa uma quebra de linha (quando o usuário pressiona Enter).
  // O .length do array resultante mostra o número total de linhas.
// \n/ representa uma quebra de linha e /\s+/ representa um ou mais espaços em branco, ou seja uma palavra
}