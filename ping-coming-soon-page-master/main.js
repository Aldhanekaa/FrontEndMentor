const emailInput = document.querySelector('#email');
const emailInputSubmitBtn = document.querySelector('#submit');
const emailRegex = /^[\w"].*["]?@.*[.].*/i
const status = document.querySelector('#status');

emailInputSubmitBtn.addEventListener('click', checkEmailValidation)

emailInput.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        checkEmailValidation()
    }
})

function checkEmailValidation() {
    const result = emailRegex.test(emailInput.value.trim());
    console.log(emailInput.value)
    console.log(result)
    if (result) {
        emailInput.value = '';
        printStatus('Thank You For Subscribed!', 'green', emailInput.value);
        setTimeout(() => {
            status.style.display = 'none';
            emailInput.style.border = `1px solid hsl(223, 100%, 88%)`
        }, 5000);
    } else if (emailInput.value == '') {
        //some code
        emailInput.value = '';
        printStatus('Whoops! It looks like you forgot to add your email', 'var(--Light-Red)', emailInput.value);
    } else {
        printStatus('Please provide a valid email address', 'var(--Light-Red)', emailInput.value);
    }
}

function printStatus(output, color, value) {
    const result = emailRegex.test(value.trim());
    if (result) {
        status.innerHTML = output;
        emailInput.style.border = `1px solid ${color}`
        status.style.color = color;
        status.style.display = 'block';
    } else if (value == '') {
        status.innerHTML = output;
        emailInput.style.border = `1px solid ${color}`
        status.style.color = color;
        status.style.display = 'block';
    } else {
        status.innerHTML = output;
        emailInput.style.border = `1px solid ${color}`
        status.style.color = color;
        status.style.display = 'block';
    }
}


// Please provide a valid email address
// const result = status.match(emailRegex)
// console.log(result)

