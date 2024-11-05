document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".cv-container");

    // Esperar hasta que la página esté completamente cargada
    window.addEventListener("load", () => {
        // Ocultar el loader
        loader.style.display = "none";
        
        // Mostrar el contenido principal
        content.style.opacity = "1";
    });
});
