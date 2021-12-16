'use strict'


// Parte del menu hamburguesa
const menu = document.querySelector(".icon");
const header = document.querySelector(".nav");

const menu_hamburguesa = (menu) => {
    if (!menu.classList.contains("responsive")) {
        menu.classList.add("responsive");
    } else {
        menu.classList.remove("responsive");
    }
}

menu.addEventListener("click",
    () => {
        menu_hamburguesa(header);
        if (!menu.classList.contains("active")) {
            menu.classList.add("active");
        } else {
            menu.classList.remove("active");
        }
    }
);