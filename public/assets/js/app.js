const qtSliders = document.querySelectorAll('.slider--item').length;
let currentSide = 0;

document.querySelector(
  '.slider--width'
).style.width = `calc(100vw * ${qtSliders})`;

document.querySelector('.slider--controls').style.height = `${
  document.querySelector('.slider').clientHeight
}px`;

const btnControls = document
  .querySelectorAll('.slider--control')
  .forEach(element => {
    element.addEventListener('click', e => {
      let btn = e.target;
      if (btn.textContent === 'voltar') {
        goPrev();
      } else {
        goNext();
      }
    });
  });

const updateMargin = () => {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = currentSide * sliderItemWidth;
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
};

const goNext = () => {
  currentSide++;
  if (currentSide > qtSliders - 1) currentSide = 0;
  updateMargin();
};

const goPrev = () => {
  currentSide--;
  if (currentSide < 0) currentSide = qtSliders - 1;
  updateMargin();
};

setInterval(goNext, 5000);
