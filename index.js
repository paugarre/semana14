document.addEventListener("DOMContentLoaded", function() {
    // Función para mover las opciones al menú desplegable
    function moveOptionsToDropdown() {
        const optionsList = document.querySelector(".list-group");
        const optionsDropdown = document.querySelector("#optionsDropdown");

        if (window.innerWidth <= 768) {
            if (optionsList && optionsDropdown) {
                optionsList.style.display = "none";
                optionsDropdown.style.display = "block";
            }
        } else {
            // Restablecer las opciones en su ubicación original
            if (optionsList && optionsDropdown) {
                optionsList.style.display = "block";
                optionsDropdown.innerHTML = ""; 
                optionsDropdown.style.display = "none";
            }
        }
    }

    moveOptionsToDropdown();
    window.addEventListener("resize", moveOptionsToDropdown);
});

