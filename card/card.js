let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle('active');

});


window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


let click_meta = document.getElementById('meta');
let card = document.getElementById('card-popup');
let close_btn = document.getElementById('close_btn');
let click_chatri = document.getElementById('chatri');
let tatto_type = document.getElementById('tatto_type');
let card_description = document.getElementById('card_description');
let tatto_image = document.getElementById('tatto');
let tatto_name = document.getElementById('tatto_name');
let count = 0;
let tatto_set;
let triangle_right = document.getElementById('triangle_right');
let triangle_left = document.getElementById('triangle_left');


click_meta.addEventListener("click", function (item) {
  count = 0;
  tatto_set = 0;
  card.setAttribute("data-item-status", "open");
  document.getElementById("overlay").style.display = "block";
  tatto_type.innerText = 'เพื่อผลทางเมตตามหานิยม';
  card_description.innerHTML = 'นิยมสักเป็นรูปจิ้งจกหรือสาริกา<br> เป็นตัวแทนของความมีเสน่ห์เป็นที่รักใคร่ของคนทั่วไป <br>ให้ผลดีทางการเจรจาค้าขาย ทำให้เจริญรุ่งเรืองขึ้น';
  tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B8%88%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B8%88%E0%B8%81%20(1)-01.png";
  tatto_name.innerHTML = "ยันต์จิ้งจก";
});

click_chatri.addEventListener("click", function (item) {
  count = 0;
  tatto_set = 1;
  card.setAttribute("data-item-status", "open");
  document.getElementById("overlay").style.display = "block";
  tatto_type.innerText = 'เพื่อผลทางอยู่ยงคงกระพัน';
  card_description.innerHTML = 'ให้แคล้วคลาดจากของมีคม อุบัติเหตุ หรืออันตรายทั้งปวง<br>นิยมสักลวดลายซึ่งเป็นตัวแทนความดุร้าย ความปราดเปรียว<br> ความสง่างาม ความกล้าหาญ<br> เช่น ลายเสือเผ่น หนุมานคลุกฝุ่น หงส์ และลายสิงห์';
  tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/8%20%E0%B8%97%E0%B8%B4%E0%B8%A8.png";
  tatto_name.innerHTML = "ยันต์แปดทิศ";
});

function addNumber() {
  count += 1;

  if (tatto_set == 0) {
    count = count % 2;

    if (count == 0) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B8%88%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B8%88%E0%B8%81%20(1)-01.png";
      tatto_name.innerHTML = "ยันต์จิ้งจก";
    }
    else if (count == 1) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B8%9E%E0%B8%B8%E0%B8%92%E0%B8%8B%E0%B9%89%E0%B8%AD%E0%B8%99%20(1)-01.png";
      tatto_name.innerHTML = "ยันต์พุฒซ้อน";
    }

  }
  else if (tatto_set == 1) {
    count = count % 5;

    if (count == 0) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/8%20%E0%B8%97%E0%B8%B4%E0%B8%A8.png";
      tatto_name.innerHTML = "ยันต์แปดทิศ";
    }
    else if (count == 1) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/5%20%E0%B9%81%E0%B8%96%E0%B8%A7.png";
      tatto_name.innerHTML = "ยันต์ห้าแถว";
    } else if (count == 2) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/9%E0%B8%A2%E0%B8%AD%E0%B8%94-01.png";
      tatto_name.innerHTML = "ยันต์เก้ายอด";
    }
    else if (count == 3) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%9C%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99.PNG";
      tatto_name.innerHTML = "ยันต์เสือเผ่น";
    }
    else if (count == 4) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%84%E0%B8%B9%E0%B9%88%20(1)-01.png";
      tatto_name.innerHTML = "ยันต์เสือคู่";
    }


  }
  
}

function minusNumber() {
  count -= 1;

  if (tatto_set == 0) {
    count = count % 2;

    if (count == 0) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B8%88%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B8%88%E0%B8%81%20(1)-01.png";
      tatto_name.innerHTML = "ยันต์จิ้งจก";
    }
    else if (count == 1) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B8%9E%E0%B8%B8%E0%B8%92%E0%B8%8B%E0%B9%89%E0%B8%AD%E0%B8%99%20(1)-01.png";
      tatto_name.innerHTML = "ยันต์พุฒซ้อน";
    }
    
    else if (count == -1) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B8%9E%E0%B8%B8%E0%B8%92%E0%B8%8B%E0%B9%89%E0%B8%AD%E0%B8%99%20(1)-01.png";
      tatto_name.innerHTML = "ยันต์พุฒซ้อน";
    }

  }
  else if (tatto_set == 1) {
    count = count % 5;

    if (count == 0) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/8%20%E0%B8%97%E0%B8%B4%E0%B8%A8.png";
      tatto_name.innerHTML = "ยันต์แปดทิศ";
    }
    else if (count == 1) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/5%20%E0%B9%81%E0%B8%96%E0%B8%A7.png";
      tatto_name.innerHTML = "ยันต์ห้าแถว";
    } else if (count == 2) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/9%E0%B8%A2%E0%B8%AD%E0%B8%94-01.png";
      tatto_name.innerHTML = "ยันต์เก้ายอด";
    }
    else if (count == 3) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%9C%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99.PNG";
      tatto_name.innerHTML = "ยันต์เสือเผ่น";
    }
    else if (count == 4) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%84%E0%B8%B9%E0%B9%88%20(1)-01.png";
      tatto_name.innerHTML = "ยันต์เสือคู่";
    }
    else if (count == -4) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/5%20%E0%B9%81%E0%B8%96%E0%B8%A7.png";
      tatto_name.innerHTML = "ยันต์ห้าแถว";
    } else if (count == -3) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/9%E0%B8%A2%E0%B8%AD%E0%B8%94-01.png";
      tatto_name.innerHTML = "ยันต์เก้ายอด";
    }
    else if (count == -2) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%9C%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99.PNG";
      tatto_name.innerHTML = "ยันต์เสือเผ่น";
    }
    else if (count == -1) {
      tatto_image.src = "https://raw.githubusercontent.com/meawpanipa/love-for-my-mom/main/picture/popup/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%84%E0%B8%B9%E0%B9%88%20(1)-01.png";
      tatto_name.innerHTML = "ยันต์เสือคู่";
    }


  }
  
}
close_btn.addEventListener("click", function (item) {
  card.setAttribute("data-item-status", "close");
  document.getElementById("overlay").style.display = "none";
});




