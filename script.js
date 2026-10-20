const boton = document.getElementById("btn-copiar");
const correo = "calisblood123@correo.com";

boton.addEventListener("click", () => {
    navigator.clipboard.writeText(correo);
});