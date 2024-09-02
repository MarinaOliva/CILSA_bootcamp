document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const fechaNacimientoInput = document.getElementById('fecha-nacimiento');

    form.addEventListener('submit', (event) => {
        const emailValue = emailInput.value;
        const fechaNacimientoValue = fechaNacimientoInput.value;
        // Expresión regular para validar el formato del email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        const currentDate = new Date();
        const birthDate = new Date(fechaNacimientoValue);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        
        
     // Validar dirección de email
        if (!emailPattern.test(emailValue)) {
            // Prevenir el envío del formulario
            event.preventDefault();
            alert('Por favor, ingrese un correo electrónico válido.');
            // Enfocar el campo del email para facilitar la corrección
            emailInput.focus();
        }
        
     // Validar fecha de nacimiento (menor a 100 años de edad y mayor a un día de edad)
        if (!fechaNacimientoValue || age > 100 || birthDate > currentDate || birthDate.toDateString() === currentDate.toDateString()) {
            event.preventDefault();
            alert('Por favor, ingrese una fecha de nacimiento válida.');
            fechaNacimientoInput.focus();
            return;
        }
     
    // Mostrar mensaje de error si hay uno
    if (errorMessage) {
        errorMessageDiv.textContent = errorMessage;
    } else {
        // Mostrar confirmación de envío de datos
        alert('¡Gracias! Sus datos han sido enviados con éxito.');
    }    
    });
});
