document.addEventListener("DOMContentLoaded", function () {
    // Ocultamos la pantalla de carga después de 2 segundos
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        
        // Mostramos la pantalla de selección con una transición
        const selectionScreen = document.getElementById("selectionScreen");
        selectionScreen.style.display = "block";
        selectionScreen.style.opacity = 1;
    }, 2000);

    // Evento para mostrar el contenido del currículum
    document.getElementById("showCurriculum").addEventListener("click", function () {
        const selectionScreen = document.getElementById("selectionScreen");
        selectionScreen.style.opacity = 0;
        
        // Esperamos a que la transición termine para ocultarlo
        setTimeout(function () {
            selectionScreen.style.display = "none";
            
            // Mostramos el contenido del CV con transición
            const cvContent = document.getElementById("cvContent");
            cvContent.style.display = "block";
            setTimeout(function () {
                cvContent.style.opacity = 1;
            }, 10);
        }, 300);
    });
});
