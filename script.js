const boton = document.getElementById("btn-copiar");
const correo = "calisblood123@correo.com";

boton.addEventListener("click", () => {
    navigator.clipboard.writeText(correo);
});

document.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-href]");
    if (!button) return;

    if (button.dataset.target === "_blank") {
        window.open(button.dataset.href, "_blank", "noopener,noreferrer");
        return;
    }

    window.location.href = button.dataset.href;
});