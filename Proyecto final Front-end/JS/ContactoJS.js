// Interceptar el evento de envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Evitar el comportamiento por defecto del formulario (recargar la página)
  
  // Mostrar el mensaje de confirmación
  document.getElementById('confirmationMessage').style.display = 'block';
  
  // Limpiar los campos del formulario
  document.getElementById('contactForm').reset();
});
