let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Dot(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.01;
  this.distanceFromCenter = randomIntFromRange(180, 300);

  this.update = () => {
    this.radians += this.velocity;

    //Circular moition
    this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
    this.draw();
  };

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
}

// Implementation
let particles = [];
function init() {
  //how many dots,center and size
  for (let i = 0; i < 11; i++) {
    particles.push(new Dot(canvas.width / 2, canvas.height / 2, 5, "#000"));
  }
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
  });
}

init();
animate();
