
let currentValue ='';
let theOperator ='';
let previousValue ='';
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
      const result = performOperation();
      if (result !== undefined){
        current.textContent = result;
        previous.textContent ='';
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
        

})

//function to handle numbers//
function handleNum(num){
    currentValue += num;
}

//function to handle operations. make currentValue into previous value
function operation (op){
    theOperator = op;
    previousValue = currentValue;
    currentValue='';
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
    let answer;

    switch (theOperator){
        case '+' : 
            answer = add(previousValue,currentValue);
        break;
        case '-':
            answer = subtract(previousValue,currentValue)
        case 'x':
            answer = multiply(previousValue,currentValue)
            break;
        case '/':
            answer = divide(previousValue,currentValue)
            break;
    }
return answer;
     
}
