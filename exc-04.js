let pesoSacoKg = parseFloat(prompt("Digite o peso do saco de ração (em kg):"));
let racaoporgato = parseFloat(prompt("Digite a quantidade de ração por gato (em gramas):"));
let pesosacogramas = pesoSacoKg * 1000;
let racaoconsumida = racaoporgato * 2 * 5;
let racaorestante = pesosacogramas - racaoconsumida;
alert("Quantidade de ração restante no saco após 5 dias: " + racaorestante + " gramas");