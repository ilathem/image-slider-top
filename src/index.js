import './index.css';
import cat from './cat.jpg';
import eclipse from './eclipse.jpg';
import mushroom from './mushroom.jpg';
import sky from './sky.jpg';
import statue from './statue.jpg';
import arrow from './icons8-arrow-right-48.png';
let images = [cat, eclipse, mushroom, sky, statue];

const circlesDiv = document.createElement('div');
circlesDiv.classList.add('circlesDiv');

const sliderDiv = document.createElement('div');
sliderDiv.classList.add('sliderDiv');

document.body.append(sliderDiv, circlesDiv);

const leftArrow = document.createElement('img');
leftArrow.src = arrow;
leftArrow.classList.add('leftArrow');
leftArrow.addEventListener('click', (e) => {
  goLeft();
});
sliderDiv.appendChild(leftArrow);

const sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider-container');
sliderDiv.appendChild(sliderContainer);

const imagesDiv = document.createElement('div');
imagesDiv.classList.add('images');
sliderContainer.appendChild(imagesDiv);

const rightArrow = document.createElement('img');
rightArrow.src = arrow;
rightArrow.classList.add('rightArrow');
rightArrow.addEventListener('click', (e) => {
  goRight();
});
sliderDiv.appendChild(rightArrow);

const addInitialImages = () => {
  images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.classList.add('image');
    document.querySelector('.images').appendChild(imgElement);
    if (index === 0) document.querySelector('.images').style.left = 0;

    const circle = document.createElement('circle');
    circle.classList.add('circle');
    if (index === 0) circle.classList.add('activeCircle');
    circle.addEventListener('click', () => {
      goToImage(index);
      document.querySelectorAll('.circle').forEach((circle) => {
        circle.classList.remove('activeCircle');
      });
      circle.classList.add('activeCircle');
    });
    circlesDiv.appendChild(circle);
  });
};

let currentImage = 0;

const goToImage = (index) => {
  currentImage = index;
  document.querySelector('.images').style.left = `-${currentImage * 500}px`;
};

const goRight = () => {
  if (currentImage + 1 >= images.length) {
    currentImage = 0;
  } else currentImage = currentImage + 1;
  // console.log(document.querySelector('.images').style)
  document.querySelector('.images').style.left = `-${currentImage * 500}px`;
  document.querySelectorAll('.circle').forEach((circle, index) => {
    if (currentImage === index) circle.classList.add('activeCircle');
    else circle.classList.remove('activeCircle');
  });
};

const goLeft = () => {
  if (currentImage - 1 < 0) {
    currentImage = images.length - 1;
  } else currentImage = currentImage - 1;
  // console.log(document.querySelector('.images').style)
  document.querySelector('.images').style.left = `-${currentImage * 500}px`;
  document.querySelectorAll('.circle').forEach((circle, index) => {
    if (currentImage === index) circle.classList.add('activeCircle');
    else circle.classList.remove('activeCircle');
  });
};

addInitialImages();

document.body.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') goRight();
  if (e.key === 'ArrowLeft') goLeft();
});
