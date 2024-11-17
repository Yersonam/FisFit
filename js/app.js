// Selección de elementos
const navMenu = document.querySelector('.nav__bars');
const navLinksMenu = document.querySelector('.nav__link--menu');
const navClose = document.querySelector('.nav__close');
const heroCTA = document.querySelector('.cta');
const botonesMasInfo = document.querySelectorAll('.boton, .boton2');

// Función para abrir el menú
navMenu.addEventListener('click', () => {
    navLinksMenu.classList.add('show'); // Muestra el menú con fondo negro
    navClose.style.setProperty('--show', 'block'); // Muestra el ícono de cierre
    document.body.classList.add('menu-open'); // Desactiva el scroll
  });
  
  // Función para cerrar el menú
navClose.addEventListener('click', () => {
    navLinksMenu.classList.remove('show'); // Oculta el menú
    navClose.style.setProperty('--show', 'none'); // Oculta el ícono de cierre
    document.body.classList.remove('menu-open'); // Restaura el scroll
  });

// Función del botón "Comienza Ahora"
heroCTA.addEventListener('click', (event) => {
  event.preventDefault();
  alert('¡Gracias por tu interés! Pronto nos pondremos en contacto contigo.');
});

// Animación en los botones "Más información"
botonesMasInfo.forEach((boton) => {
  boton.addEventListener('mouseover', () => {
    boton.style.transform = 'scale(1.1)';
    boton.style.transition = 'transform 0.3s ease';
  });
  boton.addEventListener('mouseout', () => {
    boton.style.transform = 'scale(1)';
  });
});
