document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-button');
    const navbar = document.getElementById('navbar');

    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
