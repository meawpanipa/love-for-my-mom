let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle('active');

});

let open_chest = document.getElementById('chest');
document.body.style.backgroundColor = "black";



open_chest.addEventListener("click", function(){
    document.getElementById("chest").src = "https://cdn.discordapp.com/attachments/817634371263397908/1030765156067708948/3.png";
    document.body.style.backgroundColor = "#D8D8D8";
    document.getElementsById("open-text").style.color= "black";
    
    
});



