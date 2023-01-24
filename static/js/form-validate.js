let phone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const input_phone = document.getElementById('FormControlInput1');
const text_phone = document.getElementById('ltp');
var phoneRight = false;

function onInputPhone() {
    if (isPhoneValid(input_phone.value)) {
        input_phone.style.borderColor = 'green';
        text_phone.textContent = "Номер телефона введен верно"
        text_phone.style.color = "green"
        phoneRight = true
        document.getElementById('smbt-btn').disabled = false;
    } else {
        input_phone.style.borderColor = 'red';
        text_phone.textContent = "Номер телефона введен неверно"
        text_phone.style.color = "red"
        phoneRight = false
        document.getElementById('smbt-btn').disabled = true;
    }
}

input_phone.addEventListener('input', onInputPhone);

function isPhoneValid(value) {
    return phone.test(value);
}
