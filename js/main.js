const boton = document.getElementById("btn-modo");
let modoActual= "oscuro";
boton.addEventListener("click", () => {
 document.body.classList.toggle("modo-claro");
 if (modoActual === "oscuro") {
    modoActual = "claro";
    boton.textContent = "🌙 Modo oscuro";
 } else {
    modoActual = "oscuro";
    boton.textContent = "☀️ Modo claro";
 }
});
