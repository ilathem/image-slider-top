import "./index.css";
import cat from "./cat.jpg";
import deer from "./deer.jpg";
import forest from "./forest.jpg";
import mtns from "./mtns.jpg";
import waterfall from "./waterfall.jpg";

let photos = [cat, deer, forest, mtns, waterfall];

photos.forEach((photo) => {
  const imgElement = document.createElement("img");
  imgElement.src = photo;
  imgElement.classList.add("image");
  document.querySelector(".images").appendChild(imgElement);
});
