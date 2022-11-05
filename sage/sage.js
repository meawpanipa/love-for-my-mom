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
// function scrollTo(){
    
//     const element = document.getElementById("sec2");
//     element.scrollIntoView({behavior: "smooth"});
    
// }



