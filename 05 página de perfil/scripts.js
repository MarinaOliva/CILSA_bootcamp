// Validación del formulario de contacto
(function () {
    'use strict'

    var formulario = document.getElementById('formularioContacto');

    if (formulario) {
        // Añadir un evento 'submit' para manejar la validación
        formulario.addEventListener('submit', function (event) {
            if (!formulario.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            else {
            alert("Su formulario ha sido enviado con éxito.");
            }
            // Añadir la clase 'was-validated' para mostrar los mensajes de error
            formulario.classList.add('was-validated');
        }, false);
    }
})();

// modo oscuro
const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}
