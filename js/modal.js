"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const overlays = document.getElementById("modal");
    const form_confirm = document.getElementById("form-contents");
    const form = document.getElementById("form");
    const body = document.querySelector("body"); 
    document.getElementById('confirm-modal').addEventListener("click", function() {

        // フォーム内容の取得・表示
        const textName = document.createTextNode(`名前：${form.name.value}`);
        const textEmail = document.createTextNode(`メールアドレス：${form.email.value}`);
        const textCategory = document.createTextNode(`件名：${form.category.value}`);
        const textContents = document.createTextNode(`内容：${form.contents.value}`);

        const pName = document.createElement("p");
        const pEmail = document.createElement("p");
        const pCategory = document.createElement("p");
        const pContents = document.createElement("p");

        pName.appendChild(textName);
        pEmail.appendChild(textEmail);
        pCategory.appendChild(textCategory);
        pContents.appendChild(textContents);
        // フォームで改行したところを改行
        pContents.classList.add('line-feed');

        form_confirm.appendChild(pName);
        form_confirm.appendChild(pEmail);
        form_confirm.appendChild(pCategory);
        form_confirm.appendChild(pContents);
        // ここまでフォーム送信内容確認

        body.classList.add('scroll-forbid');
        overlays.classList.add("show");
    })

    // ボタンを押した時モーダルを閉じる
    const cancel = document.getElementById("form-confirm-cancel");
    addCloseModalEvent(cancel);
    const submit = document.getElementById("submit-btn");
    addCloseModalEvent(submit);

    function addCloseModalEvent(elem) {
        elem.addEventListener("click", function() {
            form_confirm.innerHTML = ""
            overlays.classList.remove('show')
            body.classList.remove("scroll-forbid")
        })
    };
})