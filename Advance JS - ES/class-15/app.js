let slides = document.getElementsByClassName("slider-image");
let startingPoint = 1;

const playSlider = (initPoint) => {
  if (initPoint > slides.length) {
    startingPoint = 1;
  } else if (initPoint < 1) {
    startingPoint = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    // console.log(slides[i]);
    slides[i].style.display = "none";
  }

  slides[startingPoint - 1].style.display = "block";
};

playSlider(startingPoint);

setInterval(() => {
  startingPoint++;
  playSlider(startingPoint);
}, 2000);
