
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
        console.log (result);
      }
      else if (result === undefined ){
        console.log (Error)
      }
        //current.textContent = add(previousValue,currentValue);
        })
    
            clearButton.addEventListener('click', ()=>{
                previousValue = '';
                currentValue = '';
                theOperator= '';
                previous.textContent = previousValue;
               current.textContent = currentValue;
                })
        

})


function handleNum(num){
    currentValue += num;
}

function operation (op){
    theOperator = op;
    previousValue = currentValue;
    currentValue='';
}



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
     

    //if ( theOperator === "+"){
        //return currentValue + previousValue;
    //currentValue + previousValue;
    //answer = currentValue+previousValue;
    //}
    /*else if (theOperator === '-'){ 
        return subtract (previousValue,currentValue);
    }
    else if (theOperator === 'x'){
        return multiply(currentValue,previousValue);
    }
    else if (theOperator ==='/'){
        return divide(currentValue,previousValue);
    }*/

}
