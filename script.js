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
let operator;
let secondNum;
let isClicked = true;

function operator (firstNum,secondNum,operator){
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


function populateDisplay(){
    buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        display.textContent += button.textContent,'';
        //firstNum = parseInt (button.textContent,10);
        //console.log (firstNum);
          })
    })
}

function getNums(){
buttons.forEach(button =>{
    button.addEventListener ('click',()=>{
        num = button.textContent;

        if (isClicked){
            firstNum=num;
            isClicked=false
        }
        else {secondNum=num
        isClicked = true 
    }

    } )
})
}



getNums();


function clearDisplay(){
    clearButton.addEventListener('click', ()=>{
        display.textContent =' ';
    })
}



clearDisplay();
populateDisplay();