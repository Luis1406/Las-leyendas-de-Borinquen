// Seleccionamos los elementos DOM que vamos a manipular.
var front = document.querySelector('.face-front');  // Elemento de la cara frontal del libro
var back = document.querySelector('.face-back');    // Elemento de la cara trasera del libro
var flip = document.querySelector('.book-content'); // Contenedor del libro
var uno = document.querySelectorAll('.book');       // Todos los elementos con la clase 'book'
var portada = document.querySelectorAll('#portada'); // Elementos con el id 'portada'

// Inicializamos dos variables para controlar el índice Z de los elementos (profundidad en el eje Z).
var contZindex = 2; // Índice Z inicial para la próxima capa
var customZindex = 1; // Índice Z de partida para cada libro

// Iteramos sobre todos los elementos con la clase 'book'.
for (var i = 0; i < uno.length; i++) {
	// Establecemos el índice Z para cada libro, comenzando desde un valor decreciente.
	uno[i].style.zIndex = customZindex;
	customZindex--; // Decrementamos el índice Z para el siguiente elemento

	// Añadimos un event listener a cada libro que escuchará el evento 'click'.
	uno[i].addEventListener('click', function(e){

		var tgt = e.target;   // Obtenemos el objetivo del evento (el elemento que se ha clickeado)
		var unoThis = this;   // Hace referencia al libro que fue clickeado

		// Cambiamos el índice Z del libro clickeado para asegurarnos de que se visualice por encima de los demás.
		unoThis.style.zIndex = contZindex;
		contZindex++; // Incrementamos el índice Z para la próxima capa

		// Si la cara frontal del libro fue clickeada:
		if (tgt.getAttribute('class') == 'face-front') {
			// Aumentamos el índice Z para dar mayor profundidad al libro.
			unoThis.style.zIndex = contZindex;
			contZindex += 20; // Incrementamos más el índice Z para simular un giro

			// Aplicamos una rotación a la cara frontal del libro para simular el giro de página.
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(-180deg)';
			}, 500); // La rotación se aplica después de medio segundo.
		}

		// Si la cara trasera del libro fue clickeada:
		if (tgt.getAttribute("class") == 'face-back') {
			// Similar al anterior, incrementamos el índice Z.
			unoThis.style.zIndex = contZindex;
			contZindex += 20; // Incrementamos más el índice Z para la animación

			// Aplicamos una rotación inversa a la cara trasera del libro para simular el regreso a la posición original.
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(0deg)';
			}, 500); // La rotación se aplica después de medio segundo.
		}

		// Si se hace clic en la portada, activamos una clase para aplicar una transformación a la vista.
		if (tgt.getAttribute('id') == 'portada') {
			flip.classList.remove("trnsf-reset"); // Eliminamos la clase 'trnsf-reset'
			flip.classList.add("trnsf");           // Añadimos la clase 'trnsf' para aplicar la transformación
		}

		// Si se hace clic en un elemento con id 'trsf', revertimos la transformación de la vista del libro.
		if (tgt.getAttribute('id') == 'trsf') {
			flip.classList.remove("trnsf");       // Eliminamos la clase 'trnsf'
			flip.classList.add("trnsf-reset");    // Añadimos la clase 'trnsf-reset' para restaurar el estado original
		}
	});
}
