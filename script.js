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

var xcircle = document.getElementById('xcircle');
var circle = document.getElementById('circle');
var bc = document.getElementById('bc');
var garis = document.getElementById('garis');
var cffgrs = document.getElementById('cffgrs');
var boxcapek = document.getElementById('boxcapek');
var subcapek = document.getElementById('subcapek');
var subdiv2 = document.getElementById('subdiv2');
var subcapek = document.getElementById('subcapek');
var i = 0
var j = 0
var k = 0
var l = 0
var m = 0
var n = 0

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
function fcff(){
  if(j == 0) {
    cffgrs.style.opacity = "1"
    j = 1
  } else {
    cffgrs.style.opacity = "0"
    j = 0
  }
}
function fcfi(){
  if(k == 0) {
    boxcapek.style.opacity = "1"
    k = 1
  } else {
    boxcapek.style.opacity = "0"
    k = 0
  }
}
function fcapek(){
  if(l == 0) {
    subcapek.style.opacity = "1"
    l = 1
  } else {
    subcapek.style.opacity = "0"
    l = 0
  }
}
function fdiv2(){
  if(m == 0) {
    subdiv2.style.opacity = "1"
    m = 1
  } else {
    subdiv2.style.opacity = "0"
    m = 0
  }
}
function fdiv1(){
  if(n == 0) {
    subcapek.style.gridTemplateRows = "20px 60px 320px 60px 10px 60px 10px 60px"
    n = 1
  } else {
    subcapek.style.gridTemplateRows = "20px 60px 10px 60px 10px 60px 10px 60px"
    n = 0
  }
}