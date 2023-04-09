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
                    break;
                case "minus":
                    partialScreen.textContent = `${first}-${second}`;
                    resultNum = subtraction(first, parseFloat(second));
                    break;
                case "mult":
                    partialScreen.textContent = `${first}*${second}`;
                    resultNum = multiplication(first, parseFloat(second));
                    break;
                case "divide":
                    partialScreen.textContent = `${first}/${second}`;
                    resultNum = division(first, parseFloat(second));
                    break;
                case "res":
                    resultNum = parseFloat(second);
                    first = parseFloat(second);
                    partialScreen.textContent = `${first}${button.textContent}`;
                    second = "";        
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