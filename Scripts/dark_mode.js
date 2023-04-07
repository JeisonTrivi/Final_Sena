// 

const navbar = document.getElementById('navbar');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    navbar.classList.toggle('bg-dark');
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('navbar-light');
}
