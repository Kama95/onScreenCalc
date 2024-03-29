
let currentValue ='';
let theOperator ='';
let previousValue ='';
let isPressed = false;
//let addition='';

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
     currentValue = Number(currentValue);
     
     if (isPressed){
        currentValue = '';
        current.textContent='';
        isPressed=false;
      }
      
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
      const result = performOperation();
      if (result !== undefined){
        current.textContent = result;
        previous.textContent =''
        isPressed = true;
      }
      else if (result === undefined ){
        console.log (Error)
      }
        })
    
            clearButton.addEventListener('click', ()=>{
                previousValue = '';
                currentValue = '';
                theOperator= '';
                previous.textContent = previousValue;
               current.textContent = currentValue;
                })
        
        decimal.addEventListener('click',()=>{
            applyDecimal();
            //updateDisplay();
            current.textContent =currentValue;
        })

})

//function to handle numbers//
function handleNum(num){
    
    currentValue+=num }

//function to handle operations. make currentValue into previous value
function operation (op){
    if (theOperator ===''){
    theOperator = op;
    previousValue = currentValue;
    currentValue='';}
    else {
        theOperator=op;
        previousValue = performOperation()
        currentValue ='';
    }
}


//  Functions to add,subtract,multiply,divide //
function add(previousValue,currentValue){
     return currentValue + previousValue;
}

function subtract(previousValue,currentValue){
    return previousValue-currentValue;
}
function multiply(previousValue,currentValue){
    return previousValue*currentValue;
}
function divide(previousValue,currentValue){
    return previousValue/currentValue;
}

//function to perform operation by calling operations//

function performOperation (){

    switch (theOperator){
        case '+' : 
            currentValue = add(previousValue,currentValue);
        break;
        case '-':
            currentValue = subtract(previousValue,currentValue)
        case 'x':
            currentValue = multiply(previousValue,currentValue)
            break;
        case '/':
            currentValue = divide(previousValue,currentValue)
            break;
    }
return currentValue;
     
}

// Function to apply decimal point
function applyDecimal() {
    if (!currentValue.toString().includes('.')) {
        currentValue += '.';
    }
}

