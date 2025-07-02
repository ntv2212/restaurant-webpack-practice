const about = () => {
  const content = document.getElementById("content");

  const menuLayout = document.createElement("div");
  menuLayout.classList.add("menu-layout");

  const menuLayoutTitle = document.createElement("div");
  menuLayoutTitle.classList.add("menu-layout-title");
  menuLayoutTitle.textContent = "About Us";

  const aboutDescription = document.createElement("div");
  aboutDescription.classList.add("about-description");

  const firstLine = document.createElement("p");
  firstLine.textContent = "We are a restaurant that serves delicious food.";

  const secondLine = document.createElement("p");
  secondLine.textContent =
    "Our mission is to provide the best dining experience.";

  const thirdLine = document.createElement("p");
  thirdLine.textContent =
    "Join us for a culinary journey that tantalizes your taste buds!";

  aboutDescription.appendChild(firstLine);
  aboutDescription.appendChild(secondLine);
  aboutDescription.appendChild(thirdLine);

  menuLayout.appendChild(menuLayoutTitle);
  menuLayout.appendChild(aboutDescription);

  content.appendChild(menuLayout);
};

export { about };
