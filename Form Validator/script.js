const form = document.getElementById("form")
const userName = document.getElementById("username")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const passC = document.getElementById("passwordConfirmation")

// Show Input error message
function showError(input, message) {
    const formControl = input.parentElement
    formControl.classList.add('error')
    formControl.classList.remove('success')
    const small = formControl.querySelector('small')
    small.innerText = message;
}
// Show Success
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.classList.add("success")
    formControl.classList.remove("error")
}

// Validate Email
function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // expression matches a valid email address
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is invalid')
    }
}

// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        // trim to remove all white spaces
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

// check passwords match
function checkPassMatch(input1, input2) {
    if (input1.value !== input2.value) {

        showError(input2, 'Passwords do not match')
    } 
}

// get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit', e => {
    e.preventDefault()

    checkRequired([userName, email, pass, passC])

    checkLength(userName, 3, 15)
    checkLength(pass, 6, 25)
    checkEmail(email)
    checkPassMatch(pass, passC)

    // // Username
    // if (userName.value === '') {
    //     showError(userName, 'Username is required')  
    // } else {
    //     showSuccess(userName)
    // }

    // // Email
    // if (email.value === '' ) {
    //     showError(email, 'Email is required')  
    // } else if (!isValidEmail(email.value)){
    //     showError(email, 'Email is invalid')
    // } else {
    //     showSuccess(email)
    // }

    // // Password
    // if (pass.value === '') {
    //     showError(pass, 'Password is required')  
    // } else {
    //     showSuccess(pass)
    // }

    // // Confirm Password
    // if (passC.value === '') {
    //     showError(passC, 'Please confirm password')  
    // } else {
    //     showSuccess(passC)
    // }

})