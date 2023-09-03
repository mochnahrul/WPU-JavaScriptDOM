// Button
const button = document.querySelector(".btn");

// Random Color
button.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// Slider
const sliderRed = document.querySelector("input[name=slider-red]");
const sliderGreen = document.querySelector("input[name=slider-green]");
const sliderBlue = document.querySelector("input[name=slider-blue]");

// Slider Change
sliderRed.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sliderGreen.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sliderBlue.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// Cursor
document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", " + "0" + ")";
});
