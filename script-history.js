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

function show_boy() {
 
  document.getElementById('boy2').style.display = "block";
  document.getElementById('btnID').style.display = "none";
  document.getElementById('boy').style.display = "none";
}
function show_girl() {
 

  document.getElementById('girl2').style.display = "block";
  document.getElementById('btnID2').style.display = "none";
  document.getElementById('girl').style.display = "none";
}
function show_boy2() {
 
  document.getElementById('boy4').style.display = "block";
  document.getElementById('btnID3').style.display = "none";
  document.getElementById('boy3').style.display = "none";
}
function show_girl2() {
 

  document.getElementById('girl4').style.display = "block";
  document.getElementById('btnID4').style.display = "none";
  document.getElementById('girl3').style.display = "none";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);