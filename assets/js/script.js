

//* SIDEBAR BUTTON */
let btn = document.querySelector("[data-sidebar-toggle-btn]");
let sidebar = document.querySelector("[data-sidebar]");

btn.addEventListener("click", function (){
  sidebar.classList.toggle("active");
  
});

//* TOGGLE DARK MODE */
let darkModeBtn = document.querySelector("[data-darkmode-btn]");
let section = document.querySelectorAll(".section");


darkModeBtn.addEventListener("click", function(){
  
  for(const element of section){
    element.classList.toggle('light');
  }

  document.body.classList.toggle("light");
  sidebar.classList.toggle("light")


});



//* SHOW DIVS ON SCROLL
function reveal(){
  let reveals = document.querySelectorAll('.reveal');

  for(const element of reveals){

    const windowHeight = window.innerHeight;
    const revealtop = element.getBoundingClientRect().top;
    const revealpoint = 250;

    if(revealtop < windowHeight - revealpoint){
      element.classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);




//* MOMENTUM SCROLLING


const body = document.body;
const main = document.getElementById('main');

body.style.height = main.clientHeight + 'px';


main.style.top = 0;
main.style.left = 0;

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;



// Bind a scroll function
window.addEventListener('scroll', easeScroll);


function easeScroll() {
  
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}


window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  dx = li(dx,sx,0.07);
  dy = li(dy,sy,0.07);
  
  dx = Math.floor(dx * 10) / 10;
  dy = Math.floor(dy * 10) / 10;
  
  
  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
  
  
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}