'use script';

//openボタンを押すと現在時刻を表示
document.getElementById("open-bttn").onclick = function () {
  const now = new Date();
  alert(now);
};

//レイヤーの高さをウィンドウに合わせる
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

//送信ボタンをクリックすると、送信内容を表示
const body = document.body;
const modal = document.querySelector(".js-modal");
const confirm = document.getElementById("confirm");
const confirmBttn = document.getElementById("confirm-bttn");

confirmBttn.onclick = function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const text = [
    `名前：${name.value}`,
    `メールアドレス：${email.value}`,
    `件名：${title.options[title.selectedIndex].textContent}`,
    `内容：${content.value}`
  ].join('\n');

  confirm.innerText = text;

  body.classList.add("modal-open");
  modal.classList.add("is-open");
};

//キャンセルボタンをクリックすると、画面が戻る
const modalClose = document.getElementById("js-close-bttn");

modalClose.onclick = function (event) {
  event.preventDefault();
  body.classList.remove("modal-open");
  modal.classList.remove("is-open");
};
