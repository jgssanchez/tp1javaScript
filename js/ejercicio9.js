let frase = prompt("Ingrese una frase");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let vocal = frase[i];
  if (vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u") {
    vocales += vocal + " ";
  }
}