let first = "";
let second = "";
let operator = "";
let resultNum = "";
let partialNum = "";

const partialScreen = document.querySelector('#partial')
const resultScreen = document.querySelector('#result')

const buttons = document.querySelectorAll('.digits');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id);
        first = first.concat(button.id);
        resultScreen.textContent = first;
    })
});
