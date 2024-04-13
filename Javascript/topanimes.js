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

const buttonLight1 = document.querySelector(".footer_button_light");
const buttonDark2 = document.querySelector(".footer_button_dark");
const mainContent = document.querySelector(".main_content");
const textColor = document.querySelector(".main_content");
const topTitleColor = document.querySelectorAll(".top_title");
const topPlaceColor = document.querySelectorAll(".top_place");
const mainTitle = document.querySelector(".main_title");

buttonLight1.addEventListener("click", () => {
  mainContent.style.backgroundColor = "whitesmoke";
  textColor.style.color = "black";
  topTitleColor.style.color = "black";
  topPlaceColor.style.color = "black";
  mainTitle.style.color = "black";
});
buttonDark2.addEventListener("click", () => {
  mainContent.style.backgroundColor = "#24252a";
  textColor.style.color = "white";
  topTitleColor.style.color = "white";
  topPlaceColor.style.color = "white";
  mainTitle.style.color = "white";
});
