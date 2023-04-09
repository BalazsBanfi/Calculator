let first = "";
let second = "";
let decimalPushed = false;
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
    if (b === 0) {
        alert("Do not divide by zero!")
    }
    else {
        return a / b;
    }
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

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    if (!decimalPushed) {
        decimalPushed = true;
        second = second.concat(".");
    }
});


const operation = document.querySelectorAll('.operation')
operation.forEach(button => {
    button.addEventListener('click', () => {
        decimalPushed = false;
        if (!first) {
            operator = button.id;
            first = parseFloat(second);
            partialScreen.textContent = `${first}${button.textContent}`;
            second = "";
        }
        else {                      
            switch (operator) {
                case "plus":
                    partialScreen.textContent = `${first}+${second}`;
                    resultNum = addition(first, parseFloat(second));
                    second = "";
                    break;
                case "minus":
                    partialScreen.textContent = `${first}-${second}`;
                    resultNum = subtraction(first, parseFloat(second));
                    second = "";
                    break;
                case "mult":
                    partialScreen.textContent = `${first}*${second}`;
                    resultNum = multiplication(first, parseFloat(second));
                    second = "";
                    break;
                case "divide":
                    partialScreen.textContent = `${first}/${second}`;
                    resultNum = division(first, parseFloat(second));
                    second = "";
                    break;
                case "res":
                    resultNum = parseFloat(second);
                    partialScreen.textContent = `${first}${button.textContent}`;
                    first = "";
                    resultNum = "";
                    break;                
                default:
                    console.log("operations error");
            }
            
            first = resultNum;
            
        }
    operator = button.id;
    resultNum = Math.round(resultNum * 10000) / 10000;
    resultScreen.textContent = resultNum;
    })
});