const display = document.querySelector('.display');
const buttons= document.querySelectorAll('button:not(.clear, .equalSign');
const clearButton=document.querySelector('.clear')

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
    return a%b;
}

let firstNum;
let operation;
let secondNum;

function operator (operator,firstNum,secondNum){
    add()
}

function populateDisplay(){
    buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        display.textContent += button.textContent,'';
          })
    })
}

function clearDisplay(){
    clearButton.addEventListener('click', ()=>{
        display.textContent =' ';
    })
}
clearDisplay();

populateDisplay();