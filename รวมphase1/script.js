let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle('active');

});

let open_chest = document.getElementById('chest');
let text = document.getElementById("intro");
let bg = document.getElementById("bg");
let note = document.getElementById("note");
let click_circle = document.getElementById("click_circle");
let note_click = document.getElementById("note-open");
let timeout;

open_chest.addEventListener("click", function(item){
    document.getElementById("chest").src = "https://cdn.discordapp.com/attachments/817634371263397908/1030765156067708948/3.png";
    text.setAttribute("data-item-status", "open");
    bg.setAttribute("data-item-status", "open");
    note.setAttribute("data-item-status", "open");
    click_circle.setAttribute("data-item-status", "open");
});
function openChest(item){
    console.log(item)
    item.dataset.itemStatus = 'open';
}

click_circle.addEventListener("click", function(item){

    note.setAttribute("data-item-status", "close");
    click_circle.setAttribute("data-item-status", "close");
    note_click.setAttribute("data-item-status", "open");
    timeout = setTimeout(alertFunc, 2000);
});

function alertFunc() {

    location.replace("page1.html")
  }
