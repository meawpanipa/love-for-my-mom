/*(() => {
   function onScroll(){
    const boat1Elem = document.querySelector('.boat1');
    const jdElem = document.querySelector('.jd');
   
    boat1Elem.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%)`;
    jdElem.style.transform = `translate(${window.scrollY * -0.1 }%)`;
   }
   function run(){
    document.addEventListener('scroll', onScroll);
   }
   run();
})();*/

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle('active');

});


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function changePage() {

  location.replace("card.html")
}