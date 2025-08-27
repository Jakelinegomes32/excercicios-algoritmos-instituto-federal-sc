let A = document.getElementById("valorA").value;
let B = document.getElementById("valorB").value;
let texto = "Antes da troca: A = " + A + ", B = " + B + "\n";
let aux = A;
A = B;
B = aux;
texto += "Depois da troca: A = " + A + ", B = " + B;
alert(texto);
