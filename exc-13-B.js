let x = 25;
let y = 52;
let resto = y % x;
let quociente = Math.floor(y / x);

x = resto;
y = quociente;

resto = x % y;
quociente = Math.floor(x / y);

console.log("resto =", resto);
console.log("quociente =", quociente);