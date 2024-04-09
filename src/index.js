import './index.css';
import cat from './cat.jpg';
import deer from './deer.jpg';
import forest from './forest.jpg';
import mtns from './mtns.jpg';
import waterfall from './waterfall.jpg';
let images = [cat, deer, forest, mtns, waterfall];

const addInitialImages = () => {
  images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.classList.add('image');
    document.querySelector('.images').appendChild(imgElement);
  });
};

let currentImage = 0;

const goRight = () => {
  if (currentImage + 1 >= images.length) {
    currentImage = 0;
  } else currentImage = currentImage + 1;
  // console.log(document.querySelector('.images').style)
  document.querySelector('.images').style.left = `-${currentImage * 500}px`
};

const goLeft = () => {
  if (currentImage - 1 < 0) {
    currentImage = images.length - 1;
  } else currentImage = currentImage - 1;
  // console.log(document.querySelector('.images').style)
  document.querySelector('.images').style.left = `-${currentImage * 500}px`
};

addInitialImages();

document.body.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') goRight();
  if (e.key === 'ArrowLeft') goLeft();
});
