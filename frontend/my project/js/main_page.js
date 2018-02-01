const registrationButton = document.getElementById('Registration-button');
const mainPart = document.getElementById('main');
const registrationForm = document.getElementById('registration-form');
registrationButton.addEventListener('click', function (event) {
    mainPart.hidden = true;
    registrationForm.hidden = true;
});


