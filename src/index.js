import './index.css';
import cat from './cat.jpg';
import deer from './deer.jpg';
import forest from './forest.jpg';
import mtns from './mtns.jpg';
import waterfall from './waterfall.jpg';
import arrow from './icons8-arrow-right-48.png';
let images = [cat, deer, forest, mtns, waterfall];

const leftArrow = document.createElement('img');
leftArrow.src = arrow;
leftArrow.classList.add('leftArrow');
leftArrow.addEventListener('click', e => {
  goLeft()
})
document.body.appendChild(leftArrow);

const sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider-container');
document.body.appendChild(sliderContainer);

const imagesDiv = document.createElement('div');
imagesDiv.classList.add('images');
sliderContainer.appendChild(imagesDiv);

const rightArrow = document.createElement('img');
rightArrow.src = arrow;
rightArrow.classList.add('rightArrow');
rightArrow.addEventListener('click', e => {
  goRight()
})
document.body.appendChild(rightArrow);

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
  document.querySelector('.images').style.left = `-${currentImage * 500}px`;
};

const goLeft = () => {
  if (currentImage - 1 < 0) {
    currentImage = images.length - 1;
  } else currentImage = currentImage - 1;
  // console.log(document.querySelector('.images').style)
  document.querySelector('.images').style.left = `-${currentImage * 500}px`;
};

addInitialImages();

document.body.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') goRight();
  if (e.key === 'ArrowLeft') goLeft();
});
