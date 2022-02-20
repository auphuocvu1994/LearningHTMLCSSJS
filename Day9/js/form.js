var useName = document.querySelector('#txtUserName');
var email = document.querySelector('#txtEmail');
var pass = document.querySelector('#txtPass');
var confirmPass = document.querySelector('#txtConfirmPass');
var form = document.querySelector('form');

function onFocusOutInput(lstInput) {
    lstInput.forEach(item => {
        item.value = item.value.trim();
        // let parentInput = txtInput.parentElement
        item.addEventListener("focusout", function () {
            if (item.value.length > 0) {
                item.classList.add('show')
            }else{
                item.classList.remove('show')
            }
        });
    });
}

onFocusOutInput([useName, email, pass, confirmPass])

function showError(txtInput, message) {
    let parentInput = txtInput.parentElement
    let small = parentInput.querySelector('small')
    parentInput.classList.add('error')
    small.innerText = message
}
function hideError(txtInput, message) {
    let parentInput = txtInput.parentElement
    let small = parentInput.querySelector('small')
    parentInput.classList.remove('error')
    small.innerText = ''
}

function checkEmtyError(listText) {
    let isCheck = false
    listText.forEach(item => {
        item.value = item.value.trim()
        if (item.value == '') {
            showError(item, "Khong duoc bo trong")
            isCheck = true
        }
    });
    return isCheck
}

function checkEmailError(txtEmail) {
    let isCheck = false
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    txtEmail.value = txtEmail.value.trim()

    if (!txtEmail.value.match(regexEmail)) {
        showError(txtEmail, "Email khong hop le")
        isCheck = true;
    }
    // if (!regexEmail.test(txtEmail.value)) {
    //     showError(txtEmail,"Email khong hop le")
    //     isCheck=true;
    // }

    return isCheck
}

function checkPass(txtPass, txtConfirmPass) {
    let isCheck = false;
    txtPass.value = txtPass.value.trim();
    txtConfirmPass.value = txtConfirmPass.value.trim();
    if (txtPass.value !== txtConfirmPass.value) {
        showError(txtPass, "Mat khau xac nhan khong khop")
        showError(txtConfirmPass, "Mat khau xac nhan khong khop")
        isCheck = true;
    }

    return isCheck
}

function checkLength(lstTxt, min, max) {
    let isCheck = false;
    lstTxt.forEach(item => {
        item.value = item.value.trim();
        if (item.value.length < min || item.value.length > max) {
            showError(item, `Do dai tu ${min} ki tu den ${max} ki tu`)
            isCheck = true;
        }
    });

    return isCheck
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    // Check length
    var isCheckLength = checkLength([useName, pass, confirmPass], 5, 10);
    // Check emty
    var isEmtyError = checkEmtyError([useName, email, pass, confirmPass])
    //Check email
    var isCheckEmail = checkEmailError(email)
    //Check map Pass
    var isCheckPass = checkPass(pass, confirmPass)


    if (isEmtyError || isCheckEmail || isCheckPass || isCheckLength) {
        // Nothing doing
    } else {
        //Call API
    }
})
