const BUTTON_CLICK_EVENT= document.getElementById('move-button');
BUTTON_CLICK_EVENT.addEventListener('click', () => {
    alert(new Date());
});


const FORM_SUBMIT_EVENT = document.getElementById('form-submit');
FORM_SUBMIT_EVENT.addEventListener('click', () => {
    console.log("submit");

    const INPUT_NAME = document.getElementById('input-name');
    const INPUT_MAIL = document.getElementById('input-mail');
    const INPUT_ABOUT = document.getElementById('input-about');
    const INPUT_CONTENT = document.getElementById('input-content');

    document.getElementById('confirm-name').innerText = INPUT_NAME.value;
    document.getElementById('confirm-mail').innerText = INPUT_MAIL.value;
    document.getElementById('confirm-about').innerText = INPUT_ABOUT.value;
    document.getElementById('confirm-content').innerText = INPUT_CONTENT.value;

});


const buttonOpen = document.getElementById('form-submit');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];
const formPost = document.getElementsByClassName('modalPost')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// キャンセルがクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// 送信がクリックされた時
formPost.addEventListener('click', modalPost);
function modalPost() {
  modal.style.display = 'none';
  alert('送信されました！');    
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}