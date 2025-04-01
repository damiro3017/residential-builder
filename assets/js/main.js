const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__menu");
const navBar = document.querySelector(".header__navbar");

openMenu.addEventListener("click", () => {
  navBar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navBar.classList.remove("active");
});
