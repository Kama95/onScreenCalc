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
}

let firstNum;
let operation;
let secondNum;

function operator (firstNum,secondNum,operator){
    if ( operator ==='+'){
        return add(firstNum,secondNum);
    }
    else if (operator=== '-'){ 
        return subtract(firstNum,secondNum);
    }
    else if (operator=== 'x'){
        return multiply(firstNum,secondNum);
    }
    else if (operator==='/'){
        return divide(firstNum,secondNum);
    }
}

function populateDisplay(){
    buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        display.textContent += button.textContent,'';
        firstNum = parseInt (button.textContent,10);
        console.log (firstNum);
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