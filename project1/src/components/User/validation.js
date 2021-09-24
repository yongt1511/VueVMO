const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repassword = document.getElementById('re-password');
const phonenumber = document.getElementById('phone-number');

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //thêm thông báo lỗi bên trong small
    small.innerText = message;
    //thêm lỗi class
    formControl.className = 'form-floating error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-floating success';
}

function checkInpust() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const repasswordValue = repassword.value.trim();
    const phonenumberValue = phonenumber.value.trim();


    if (usernameValue === '') {
        setErrorFor(username, 'Tên đăng nhập không được để trống');
    } else {
        setSuccessFor(username);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Mật khẩu không được để trống');
    } else {
        setSuccessFor(password);
    }
    if (repasswordValue === '') {
        setErrorFor(repassword, 'Mật khẩu không được để trống');
    } else if (repasswordValue != passwordValue) {
        setErrorFor(repassword, 'Mật khẩu không trùng khớp');
    } else {
        setSuccessFor(repassword);
    }
    if (phonenumberValue === '') {
        setErrorFor(phonenumber, 'Số điện thoại không được để trống ');
    } else {
        setSuccessFor(phonenumber);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInpust();
})

