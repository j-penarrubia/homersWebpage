const audio = document.getElementById("audio");
const icono = document.getElementById("icono-sonido");
const boton = document.getElementById("btn-sonido")
const texto = document.getElementById("texto");

document.getElementById("btn-sonido").addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        icono.classList.remove("bi-volume-up-fill");
        icono.classList.add("bi-volume-mute-fill");
        texto.innerHTML = "Stop Sound";
    } else {
        audio.pause();

        icono.classList.remove("bi-volume-mute-fill");
        icono.classList.add("bi-volume-up-fill");
        texto.innerHTML = "Start Sound";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-cortinas");
    setTimeout(() => {
        if (contenedor) {
            contenedor.remove();
        }
    }, 3500);
});