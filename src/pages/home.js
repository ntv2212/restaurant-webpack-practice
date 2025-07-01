import preview from "../../assets/preview.png";

const home = () => {
  const content = document.getElementById("content");

  const previewImage = document.createElement("div");
  previewImage.classList.add("preview-image");

  const img = document.createElement("img");
  img.src = preview;
  img.alt = "Restaurant Preview";

  previewImage.appendChild(img);

  const homeDescription = document.createElement("div");
  homeDescription.classList.add("home-description");

  const title = document.createElement("div");
  title.textContent = "the ultimate";

  const subtitle = document.createElement("div");
  subtitle.textContent = "burger club";

  const description = document.createElement("div");
  description.textContent = "Savor the Flavor, Join the Club!";

  homeDescription.appendChild(title);
  homeDescription.appendChild(subtitle);
  homeDescription.appendChild(description);

  content.appendChild(previewImage);
  content.appendChild(homeDescription);
};

export { home };
