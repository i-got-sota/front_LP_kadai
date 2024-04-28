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
    
    console.log(INPUT_NAME.value);
    console.log(INPUT_MAIL.value);
    console.log(INPUT_ABOUT.options[INPUT_ABOUT.selectedIndex].label);
    console.log(INPUT_CONTENT.value);

});