// Función para mostrar la diapositiva anterior en el carrusel
function prevSlide() {
  // Selecciona todas las tarjetas (elementos con la clase "card") en la página
  let cards = document.querySelectorAll(".card");

  // Coloca la última tarjeta en la parte superior del contenedor (haciendo que sea la primera en ser visible)
  document.querySelector(".slide").prepend(cards[cards.length - 1]);
}

// Función para mostrar la siguiente diapositiva en el carrusel
function nextSlide() {
  // Selecciona todas las tarjetas (elementos con la clase "card") en la página
  let cards = document.querySelectorAll(".card");

  // Mueve la primera tarjeta al final del contenedor (haciendo que sea la última en ser visible)
  document.querySelector(".slide").appendChild(cards[0]);
}
