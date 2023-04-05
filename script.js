let first = "";
let second = "";
let operator = "";
let result = "";
let partial = "";


const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id);
    })
});
