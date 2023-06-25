const body = document.querySelector("body");

const img_Number = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber + 1}.jpeg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * img_Number);
  return number;
}

function reset() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

reset();