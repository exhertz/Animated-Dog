const canvas = document.getElementById('dog');
const ctx = canvas.getContext('2d');

const image = new Image(120, 120);
image.onload = drawImageActualSize;


var images = [];
for (let i = 0; i < 12; i++) {
    images[i] = `res/dog/${i+1}.png`;
}

let current = 0
image.src = images[0]

setInterval(() => {
  current = (current + 1) % images.length
  image.src = images[current]
}, 100)

function drawImageActualSize() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;
  ctx.drawImage(this, 0, 0);
}