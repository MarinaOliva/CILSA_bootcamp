document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (event) => {
        const emailValue = emailInput.value;

        // Expresión regular para validar el formato del email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            // Prevenir el envío del formulario
            event.preventDefault();

            // Mostrar un mensaje de error
            alert('Por favor, ingrese un correo electrónico válido.');
            
            // Enfocar el campo del email para facilitar la corrección
            emailInput.focus();
        }
    });
});
