// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-nav-toggle');

// navBarToggle.addEventListener("click", function(){
//     mainNav.classList.toggle('active');

// });

// let open_chest = document.getElementById('chest');
// let text = document.getElementById("intro");
// let bg = document.getElementById("bg");
// let note = document.getElementById("note");
// let click_circle = document.getElementById("click_circle");

// open_chest.addEventListener("click", function(item){
//     document.getElementById("chest").src = "https://cdn.discordapp.com/attachments/817634371263397908/1030765156067708948/3.png";
//     text.setAttribute("data-item-status", "open");
//     bg.setAttribute("data-item-status", "open");
//     note.setAttribute("data-item-status", "open");
//     click_circle.setAttribute("data-item-status", "open");
// });
// function openChest(item){
//     console.log(item)
//     item.dataset.itemStatus = 'open';
// }
let yun1 = document.getElementById('yod1');
let yun2 = document.getElementById('yod2');
let yun3 = document.getElementById('tid8');
let yun4 = document.getElementById('yod9');
let yun5 = document.getElementById('tiger');
let kem = document.getElementById('kem');
let click_circle = document.getElementById("click_circle");
// let text = document.getElementById('pb').innerHTML;
// let result = text.bold();


click_circle.addEventListener("click", function(item){
    yun1.setAttribute("data-item-status", "open");
    yun2.setAttribute("data-item-status", "open");
    yun3.setAttribute("data-item-status", "open");
    yun4.setAttribute("data-item-status", "open");
    yun5.setAttribute("data-item-status", "open");
    kem.setAttribute("data-item-status", "open");
    document.getElementById("textsuk").innerHTML = "คือ ตารางหรือลายเส้นซึ่งเป็นตัวเลขอักขระหรือรูปภาพที่เขียนสักหรือแกะสลักลงบนแผ่นผ้า ผิวหนัง ไม้ โลหะ เป็นต้น ถือว่าเป็นของขลัง";
    document.getElementById("pb").innerHTML = "ยันต์";
    // document.getElementById("demo1").innerHTML = result;
})
