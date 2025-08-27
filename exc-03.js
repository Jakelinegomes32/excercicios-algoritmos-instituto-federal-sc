let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoAtual = parseInt(prompt("Digite o ano atual:"));
let idadeanos = anoAtual - anoNascimento;
let idadeMeses = idadeanos * 12;
let idadeDias = idadeanos * 365;
let idadeSemanas = idadeDias /7;
alert("Idade em anos: " + idadeanos + "\nIdade em meses: " + idadeMeses + "\nIdade em dias: " + idadeDias + "\nIdade em semanas: " + Math.floor(idadeSemanas));

