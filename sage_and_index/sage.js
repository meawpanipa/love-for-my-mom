let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle('active');

});

let bank = document.getElementById('bank');
let candle = document.getElementById('candle');
let thup = document.getElementById('thup');
let malai = document.getElementById('malai');
let hand = document.getElementById('hand');

let circle = document.getElementById("circle");
let timeout;

circle.addEventListener("click", function(item){
   
    bank.setAttribute("data-item-status", "open");
    candle.setAttribute("data-item-status", "open")
    thup.setAttribute("data-item-status", "open")
    malai.setAttribute("data-item-status", "open")
    hand.setAttribute("data-item-status", "open")
    
    circle.setAttribute("data-item-status", "close");
    // setTimeout(() => {scrollTo()}, 8000);

    
  
});
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 400;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

var node1 = document.getElementById("left");
var node2 = document.getElementById("right");
function swapNodes(node1, node2) {
    node2_copy = node2.cloneNode(true);
    node1.parentNode.insertBefore(node2_copy, node1);
    node2.parentNode.insertBefore(node1, node2);
    node2.parentNode.replaceChild(node2, node2_copy);
}