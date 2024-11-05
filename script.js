
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = toggleButton.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> ';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> ';
    }
});

const navbar = document.querySelector('.navbar');
const modalContent = document.querySelector('.modal-content');

darkModeToggle.addEventListener('click', () => {
body.classList.toggle('dark-mode');
navbar.classList.toggle('navbar-dark-mode');
modalContent.classList.toggle('dark-mode');

// Si tienes formularios, también puedes añadir la clase
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
input.classList.toggle('dark-mode');
});
});

// Función de Filtrado de Episodios
// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const equiposContainer = document.getElementById('equiposContainer');

    // Añade un evento al botón de búsqueda
    searchButton.addEventListener('click', function () {
        const query = searchInput.value.toLowerCase(); // Obtiene el valor del input y lo convierte a minúsculas

        // Obtiene todas las tarjetas de equipos
        const tarjetas = equiposContainer.getElementsByClassName('col-md-4');

        // Recorre las tarjetas y oculta las que no coincidan con la búsqueda
        Array.from(tarjetas).forEach(function (tarjeta) {
            const title = tarjeta.getElementsByClassName('card-title')[0].innerText.toLowerCase();
            if (title.includes(query)) {
                tarjeta.style.display = ""; // Muestra la tarjeta si coincide
            } else {
                tarjeta.style.display = "none"; // Oculta la tarjeta si no coincide
            }
        });
    });
});



