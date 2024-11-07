"use strict";

// header をスライドショーにする

const slideContainer = document.querySelector(".slide");
const prev = document.getElementById("js-prev");
const next = document.getElementById("js-next");
const slides = document.querySelectorAll(".slide > div");
const totalSlides = slides.length;
const slideWidth = 100 / totalSlides;

slideContainer.style.width = `${totalSlides * 100}%`;
slides.forEach((slide) => {
  slide.style.width = `${slideWidth}%`;
});

let count = 0;
let autoPlayInterval;

function updateSlidePosition() {
  slideContainer.style.transform = `translateX(-${count * slideWidth}%)`;
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 3000);
}
function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

function nextClick() {
  count = count + 1 >= totalSlides ? 0 : count + 1;
  updateSlidePosition();
}

function prevClick() {
  count = count <= 0 ? totalSlides - 1 : count - 1;
  updateSlidePosition();
}

next.addEventListener("click", () => {
  nextClick();
  resetAutoPlayInterval();
});
prev.addEventListener("click", () => {
  prevClick();
  resetAutoPlayInterval();
});

startAutoPlay();

// open ボタンを押すと現在時刻を alert で表示させる

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = String(now.getDate()).padStart(2, "0");
const hour = now.getHours();
const min = String(now.getMinutes()).padStart(2, "0");

const time = `${year} ${month}/${date} ${hour}:${min}`;

document.getElementById("shop-js_alert").onclick = function () {
  window.alert(time);
};

// フォームの送信ボタンを押すと確認用のモーダルを出す

const modal = document.getElementById("js-modal");
const open = document.getElementById("js-modal-open");
const closes = document.querySelectorAll(".js-modal-close");

// 「開くボタン」をクリックしてモーダルを開く
open.onclick = function () {
  modal.classList.add("is-active");
  // name で入力を受け取って出力する

  const inputname = document.getElementById("name").ariaValueText;
  const inputaddress = document.getElementById("address").ariaValueText;
  const inputsubject = document.getElementById("subject").value;
  const inputdetail = document.getElementById("detail").ariaValueText;
  let list = [inputname, inputaddress, inputsubject, inputdetail];

  document.getElementById("content-name").textContent = `名前: ${
    inputname ? inputname : ""
  }`;
  document.getElementById("content-address").textContent = `メールアドレス: ${
    inputaddress ? inputaddress : ""
  }`;
  document.getElementById("content-subject").textContent = `件名: ${
    inputsubject ? inputsubject : ""
  }`;
  document.getElementById("content-detail").textContent = `内容: ${
    inputdetail ? inputdetail : ""
  }`;
};

// 「閉じるボタン」をクリックしてモーダルを閉じる
// close.onclick = function() {
//   modal.classList.remove("is-active")
// }
closes.forEach(function (item, index) {
  item.onclick = function () {
    modal.classList.remove("is-active");
  };
});
