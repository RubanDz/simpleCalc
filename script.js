'use strict';

let firstInput = document.getElementById('firstInput');
firstInput.addEventListener('change', function() {
  
})

let secondNumber = document.getElementById('second_number');
secondNumber.addEventListener('change', function() {
   
})

let result = document.getElementById('result');

let sign = document.getElementById('sign');
let myResult = null;
sign.addEventListener('change', function(event) {
    let signElement = event.target.value
    if(signElement == 'minus') {
        myResult = Number(firstInput.value) - Number(secondNumber.value)
    }
    if(signElement == 'plus') {
        myResult = Number(firstInput.value) + Number(secondNumber.value)
    }
    if(signElement == 'divide') {
        myResult = Number(firstInput.value) / Number(secondNumber.value)
    }
    if(signElement == 'multiply') {
        myResult = Number(firstInput.value) * Number(secondNumber.value)
    } 
})

function rezFunction() {
    result.textContent = myResult;
}
let button1 = document.getElementById('button1');
button1.addEventListener('click', rezFunction);
 

let button2 = document.getElementById('button2');
button2.addEventListener('click', function() {
    result.innerHTML = '';
    firstInput.value = '';
    secondNumber.value = '';
    result.textContent ='...';
})





//попробовать сделать через объекты, как на занятии (калькулятор)

//на следующей недели колбэки функции
  
//    




   
    
    



    






    





