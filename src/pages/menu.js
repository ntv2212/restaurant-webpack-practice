import newDish from "../../assets/new.png";
import burger from "../../assets/burger.png";
import sides from "../../assets/sides.png";
import fries from "../../assets/fries.png";
import deserts from "../../assets/deserts.png";
import launch from "../../assets/launch.png";
import wraps from "../../assets/wraps.png";
import salads from "../../assets/salads.png";

const menus = [
  {
    img: newDish,
    name: "New in The Club",
  },
  {
    img: burger,
    name: "BURGER",
  },
  {
    img: sides,
    name: "SIDES",
  },
  {
    img: fries,
    name: "FRIES",
  },
  {
    img: deserts,
    name: "DESERTS AND BEVERAGES",
  },
  {
    img: launch,
    name: "LAUNCH OFFER @99",
  },
  {
    img: wraps,
    name: "WRAPS",
  },
  {
    img: salads,
    name: "SALADS",
  },
];

const menu = () => {
  const content = document.getElementById("content");

  const menuLayout = document.createElement("div");
  menuLayout.classList.add("menu-layout");

  const menuLayoutTitle = document.createElement("div");
  menuLayoutTitle.classList.add("menu-layout-title");
  menuLayoutTitle.textContent = "Menu";

  const menuLayoutList = document.createElement("div");
  menuLayoutList.classList.add("menu-layout-list");

  menus.forEach((item) => {
    const menuLayoutListItem = document.createElement("div");
    menuLayoutListItem.classList.add("menu-layout-list-item");

    const menuLayoutListItemImage = document.createElement("img");
    menuLayoutListItemImage.src = item.img;
    menuLayoutListItemImage.alt = item.name;
    menuLayoutListItemImage.classList.add("menu-layout-list-item-image");

    const menuLayoutListItemTitle = document.createElement("div");
    menuLayoutListItemTitle.classList.add("menu-layout-list-item-title");
    menuLayoutListItemTitle.textContent = item.name;

    menuLayoutListItem.appendChild(menuLayoutListItemImage);
    menuLayoutListItem.appendChild(menuLayoutListItemTitle);

    menuLayoutList.appendChild(menuLayoutListItem);
  });

  menuLayout.appendChild(menuLayoutTitle);
  menuLayout.appendChild(menuLayoutList);

  content.appendChild(menuLayout);
};

export { menu };
