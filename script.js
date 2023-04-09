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


const operation = document.querySelectorAll('.operation')
operation.forEach(button => {
    button.addEventListener('click', () => {
        
        if (!first) {
            operator = button.id;
            first = parseInt(second);
            partialScreen.textContent = `${first}${button.textContent}`;
            second = "";
        }
        else {
                       
            switch (operator) {
                case "plus":
                    partialScreen.textContent = `${first}+${second}`;
                    resultNum = addition(first, parseInt(second));
                    break;
                case "minus":
                    partialScreen.textContent = `${first}-${second}`;
                    resultNum = subtraction(first, parseInt(second));
                    break;
                case "mult":
                    partialScreen.textContent = `${first}*${second}`;
                    resultNum = multiplication(first, parseInt(second));
                    break;
                case "divide":
                    partialScreen.textContent = `${first}/${second}`;
                    resultNum = division(first, parseInt(second));
                    break;
                default:
                    console.log("operations error");
            }

            
            first = resultNum;
            second = "";
        }
    operator = button.id;
    resultScreen.textContent = resultNum;     
    })
});