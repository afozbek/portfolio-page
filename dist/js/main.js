const menuButton = document.querySelector(".menu-btn");
const hamburgerMenu = document.querySelector(".menu-btn__burger");

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    hamburgerMenu.classList.add("open");

    showMenu = true;
  } else {
    hamburgerMenu.classList.remove("open");
    showMenu = false;
  }
}

menuButton.addEventListener("click", toggleMenu);
