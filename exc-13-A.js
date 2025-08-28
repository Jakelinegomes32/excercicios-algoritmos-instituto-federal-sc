let a = 2;
let b = 3;
let c = 4;
let dif = -5;
let soma = a + b + c - dif;

dif = soma ** 2;

a = c;  // a recebe c
c = b;  // c recebe b
b = -3; // b recebe -3

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);
console.log("soma =", soma);
console.log("dif =", dif);