let valorDolar = parseFloat(prompt("Digite o valor em dólar (US$):"));
let cotacao = parseFloat(prompt("Digite a cotação atual do dólar (R$):"));
let valorReal = valorDolar * cotacao;
console.log("O valor em reais é : R$" + valorReal.toFixed(2));