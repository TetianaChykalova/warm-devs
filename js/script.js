let btnOpenForm = document.querySelector('#open-form');
let formPopUp = document.querySelector('#pop-up');

btnOpenForm.addEventListener('click', showPopUp);

function showPopUp() {
    formPopUp.classList.toggle('show');
    console.log('yes');
}
