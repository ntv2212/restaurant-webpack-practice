import "./styles.css";
import { home } from "./pages/home";
import { menu } from "./pages/menu";
import { about } from "./pages/about";

const renderPage = (page) => {
  const content = document.getElementById("content");
  content.innerHTML = "";

  console.log(`Rendering ${page} page`);
  switch (page) {
    case "home":
      home();
      break;
    case "menu":
      menu();
      break;
    case "about":
      about();
      break;
    default:
      home();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const homeButton = document.getElementById("home-button");
  const menuButton = document.getElementById("menu-button");
  const aboutButton = document.getElementById("about-button");

  homeButton.addEventListener("click", () => renderPage("home"));
  menuButton.addEventListener("click", () => renderPage("menu"));
  aboutButton.addEventListener("click", () => renderPage("about"));

  renderPage("home");
});
