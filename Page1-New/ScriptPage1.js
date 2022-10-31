let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle('active');

});

let yun1 = document.getElementById('yod1');
let yun2 = document.getElementById('yod2');
let yun3 = document.getElementById('tid8');
let yun4 = document.getElementById('yod9');
let yun5 = document.getElementById('tiger');
let kem = document.getElementById('kem');
let btnintro = document.getElementById('btnintro');
let click_circle = document.getElementById("click_circle");
// let text = document.getElementById('pb').innerHTML;
// let result = text.bold();


click_circle.addEventListener("click", function (item) {
    yun1.setAttribute("data-item-status", "open");
    yun2.setAttribute("data-item-status", "open");
    yun3.setAttribute("data-item-status", "open");
    yun4.setAttribute("data-item-status", "open");
    yun5.setAttribute("data-item-status", "open");
    btnintro.setAttribute("data-item-status", "open");
    kem.setAttribute("data-item-status", "close");
    click_circle.setAttribute("data-item-status", "close");
    document.getElementById("textsuk").innerHTML = "คือ ตารางหรือลายเส้นซึ่งเป็นตัวเลขอักขระหรือรูปภาพที่เขียนสัก<br>หรือแกะสลักลงบนแผ่นผ้า ผิวหนัง ไม้ โลหะ เป็นต้น ถือว่าเป็นของขลัง";
    document.getElementById("pb").innerHTML = '"ยันต์"';
    timeout = setTimeout(alertFunc, 2000);
})