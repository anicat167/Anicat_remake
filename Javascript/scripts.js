// Navbar for mobile //

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav_menus").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Light and Dark buttons //

const buttonLight = document.querySelector(".footer_button_light");
const buttonDark = document.querySelector(".footer_button_dark");
const section = document.querySelector("section");
const mainContent = document.querySelector(".main_content");

buttonLight.addEventListener("click", () => {
  section.style.backgroundColor = "whitesmoke";
  mainContent.style.backgroundColor = "whitesmoke";
});
buttonDark.addEventListener("click", () => {
  section.style.backgroundColor = "#24252a";
  mainContent.style.backgroundColor = "#24252a";
});
