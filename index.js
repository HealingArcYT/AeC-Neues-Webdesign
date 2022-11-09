const menu = document.getElementById("menu");
const menu_background = document.getElementById("menu-background-image");
Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });
