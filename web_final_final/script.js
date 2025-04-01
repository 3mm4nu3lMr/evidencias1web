document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".card");
    const overlay = document.getElementById("popup-overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-img");
    const popupText = document.getElementById("popup-text");
    const popupSource = document.getElementById("popup-fuente");
    const closeButton = document.querySelector(".close-btn");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            popupTitle.textContent = tarjeta.getAttribute("data-titulo");
            popupText.textContent = tarjeta.getAttribute("data-descripcion");
            popupSource.textContent = tarjeta.getAttribute("data-fuente");
            popupImage.src = tarjeta.getAttribute("data-imagen");
            popupImage.alt = tarjeta.getAttribute("data-titulo");

            overlay.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });
});    
// Script para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('nav').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
});