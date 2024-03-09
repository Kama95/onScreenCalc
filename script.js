const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const clearButton=document.querySelector('.clear');
const equal = document.querySelector('.equalSign');
const decimal =document.querySelector('.decimalPoint');
const previous = document.querySelector('.previous');
const current = document.querySelector('.current');

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

let currentValue;
let theOperator;
let previousValue;
let isClicked = true;

/*function operator (firstNum,secondNum,operator){
    if ( operator ==='+'){
        return add(getNums);
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
*/

function handleNum(num){
    currentValue =+num;
}

function operation (op){
    theOperator = op;
    previousValue=currentValue;
    currentValue='';
}

function populateDisplay(){
    numbers.forEach(number => {
    number.addEventListener('click', (e)=>{
        handleNum(e.target.textContent);
        current.textContent += currentValue,'';
          })
        })

    operators.forEach(operator => {
        operator.addEventListener('click',(op)=>{
            operation(op.target.textContent)
            previous.textContent =` ${previousValue} ${theOperator}`;
            current.textContent = currentValue;
        })
    })
}



function clearDisplay(){
    clearButton.addEventListener('click', ()=>{
        previousValue ='';
        currentValue;
    })
}



clearDisplay();
populateDisplay();