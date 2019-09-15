const menuButton = document.querySelector(".menu-btn");
const hamburgerMenu = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = menuNav.querySelectorAll(".menu-nav__item");

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    hamburgerMenu.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach(navItem => navItem.classList.add("open"));

    showMenu = true;
  } else {
    hamburgerMenu.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach(navItem => navItem.classList.remove("open"));

    showMenu = false;
  }
}

menuButton.addEventListener("click", toggleMenu);
