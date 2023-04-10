// 

const navbar = document.getElementById('navbar');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    navbar.classList.toggle('bg-dark');
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('navbar-light');
}


var myCarousel = document.querySelector('#carouselExampleControls')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Intervalo de tiempo entre imágenes (ms)
    wrap: true // Carrusel infinito
  })