const notificacion = document.getElementById("notificacion");

function mostrarNotificacion() {
  notificacion.classList.add("mostrar");

  setTimeout(() => {
    notificacion.classList.remove("mostrar");
  }, 2500);
}

const boton = document.getElementById("btn-copiar");
const correo = "calisblood123@correo.com";

boton.addEventListener("click", () => {
    navigator.clipboard.writeText(correo);
    mostrarNotificacion();
});