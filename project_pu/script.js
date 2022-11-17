let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle('active');

});

let chest = document.getElementById('chest');
let open_chest = document.getElementById('chest_open');
let text = document.getElementById("intro");
let bg = document.getElementById("bg");
let note = document.getElementById("note");
let click_circle = document.getElementById("click_circle");
let note_click = document.getElementById("note-open");
let note_aura = document.getElementById("note_aura");
let timeout;

chest.addEventListener("click", function(item){
    chest.setAttribute("data-item-status", "close");
    open_chest.setAttribute("data-item-status", "open");
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
    note_aura.setAttribute("data-item-status", "open");
    // timeout = setTimeout(alertFunc, 2000);
});

function changePage() {

    location.replace("page1.html")
  }
