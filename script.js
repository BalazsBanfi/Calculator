let first = "";
let second = "";
let lastPushedDigit = false;
let operator = "";
let resultNum = "";
let partialNum = "";
const partialScreen = document.querySelector('#partial');
const resultScreen = document.querySelector('#result');

function reset() {
    first = "";
    second = "";
    lastPushedDigit = false;
    operator = "";
    resultNum = "";
    partialNum = "";
    partialScreen.textContent = "";
    resultScreen.textContent = "0";
}

reset();

//operations
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}




const buttons = document.querySelectorAll('.digits');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        second = second.concat(button.id);
        resultScreen.textContent = second;
    })
});

const ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
    reset();
});

const c = document.querySelector('#c');
c.addEventListener('click', () => {
    resultScreen.textContent = "0";
    second = "";
});


const plus = document.querySelector('#plus')
plus.addEventListener('click', () => {
    operator = "plus";
    if (!first) {
        first = parseInt(second);
        partialScreen.textContent = `${first}+`;
        second = ""; 
    }
    else {
        partialScreen.textContent = `${first}+${second}`;
        resultNum = addition(first, parseInt(second));
        first = resultNum;
        second = "";
    }
    resultScreen.textContent = resultNum;
});

