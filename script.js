var xcircle = document.getElementById('xcircle');
var circle = document.getElementById('circle');
var bc = document.getElementById('bc');
var garis = document.getElementById('garis');
var cffgrs = document.getElementById('cffgrs');
var i = 0
var j =0

function fcf(){
    if(i == 0) {
        xcircle.style.opacity = "0%"
        circle.style.opacity = "0%"
        bc.style.backgroundImage = "url(assets/circle.svg)"
        garis.style.opacity = "1"
        i = 1
    } else {
        xcircle.style.opacity = "100%"
        circle.style.opacity = "100%" 
        bc.style.backgroundImage = "none"
        garis.style.opacity = "0"
        i = 0
    }
}
function fcff() {
  if(j == 0) {
    cffgrs.style.opacity = "1"
    j = 1
  } else {
    cffgrs.style.opacity = "0"
    j = 0
  }
}

const slider = document.querySelector('#bbp');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});