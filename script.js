
let currentValue ='';
let theOperator ='';
let previousValue ='';

document.addEventListener ('DOMContentLoaded', function(){


const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const clearButton=document.querySelector('.clear');
const equal = document.querySelector('.equalSign');
const decimal =document.querySelector('.decimalPoint');
const previous = document.querySelector('.previous');
const current = document.querySelector('.current');


 numbers.forEach(number => {
    number.addEventListener('click', (e)=>{
        handleNum(e.target.textContent);

     currentValue = current.textContent += parseInt(number.textContent,10);
     currentValue= Number(currentValue);

          })
        })


 operators.forEach(operator => {
    operator.addEventListener('click',(e)=>{
       operation(e.target.textContent)
            previous.textContent = previousValue + " " +theOperator;
            current.textContent = currentValue;
        })
    })

    equal.addEventListener('click', ()=> {
        performOperation();
        previous.textContent = performOperation();
        })

    
            clearButton.addEventListener('click', ()=>{
                previousValue = '';
                currentValue = '';
                theOperator= '';
                previous.textContent = previousValue;
                current.textContent = currentValue;
            })
        

})


function add(previousValue,currentValue){

    return previousValue + currentValue;
}

function subtract(previousValue,currentValue){
    return previousValue-currentValue;
}
function multiply(previousValue,currentValue){
    return previousValue*currentValue;
}
function divide(a,b){
    return a/b;
}


function handleNum(num){
    currentValue += num;
}

function operation (op){
    theOperator = op;
    previousValue = currentValue;
    currentValue='';
}


function performOperation (){
 
   if ( theOperator === '+'){ 
    return add(previousValue,currentValue)
            }

    else if (theOperator === '-'){ 
        return subtract(currentValue,previousValue);
    }
    else if (theOperator === 'x'){
        return multiply(currentValue,previousValue);
    }
    else if (theOperator ==='/'){
        return divide(currentValue,previousValue);
    }
}
