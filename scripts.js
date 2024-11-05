document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".cv-container");

    // Esperar hasta que la página esté completamente cargada
    window.addEventListener("load", () => {
        // Mantener el loader visible durante 5 segundos
        setTimeout(() => {
            // Ocultar el loader
            loader.style.display = "none";
            
            // Mostrar el contenido principal
            content.style.opacity = "1";
        }, 5000); // 5000 milisegundos = 5 segundos
    });
});