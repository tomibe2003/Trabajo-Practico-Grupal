const boton = document.getElementById("btn-modo");
const mensajeModo= document.getElementById("mensaje-modo");

let modoActual= "oscuro";
let mensaje= `Activaste el modo ${modoActual}`;
let temporizador;

boton.addEventListener("click", () => {
 document.body.classList.toggle("modo-claro");
 if (modoActual === "oscuro") {
    modoActual = "claro";
    boton.textContent = "🌙 Modo oscuro";
 } else {
    modoActual = "oscuro";
    boton.textContent = "☀️ Modo claro";
 }
  mensaje= `Activaste el modo ${modoActual}`;
  mensajeModo.textContent = mensaje;
  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
   mensajeModo.textContent = "";
  }, 2000);
});
