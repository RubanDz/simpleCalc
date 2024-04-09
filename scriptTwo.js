'use strict';

const firstNumInput = document.querySelector('.first_number');
const secondNumInput = document.querySelector('.second_number');
const signSelect = document.getElementById('sign');
const resultTitle = document.getElementById('result');
const resultBtn = document.getElementById('button1');
const resetBtn = document.getElementById('button2');

const OPERATORS = {
    plus: '+',
    minus: '-',
    divide: '/',
    multiply: '*',
};

const calcData = {
    num1: '',
    num2: '',
    sign: '+',
    result: '',
};


signSelect.addEventListener('change', function(e) {
    calcData.sign = OPERATORS[e.target.value];
});

function calculate({ num1, num2, sign }) {
    switch (sign) {
        case OPERATORS.plus:
            calcData.result = plus(num1, num2);
            break;
        case OPERATORS.minus:
            calcData.result = minus(num1, num2);
            break;
        case OPERATORS.divide:
            calcData.result = divide(num1, num2);
            break;
        case OPERATORS.multiply:
            calcData.result = multiply(num1, num2);
            break;
    }
}


function plus(num1, num2) {
    return (+num1) + (+num2);
}
function minus(num1, num2) {
    return (+num1) - (+num2);
}
function divide(num1, num2) {
    return (+num1) / (+num2);
}
function multiply(num1, num2) {
    return (+num1) * (+num2);
}

function resetCalculator() {
    calcData.num1 = '';
    calcData.num2 = '';
    calcData.sign = '+';
    calcData.result = '';
    resultTitle.textContent = '...';
    firstNumInput.value = '';
    secondNumInput.value = '';
    signSelect.value = '+';
};

firstNumInput.addEventListener('keyup', function(e) {
    calcData.num1 = e.target.value;
});

secondNumInput.addEventListener('keyup', function(e) {
    calcData.num2 = e.target.value;
});

// signSelect.addEventListener('change', function(e) {
//     calcData.sign = OPERATORS[e.target.value];
// });

resultBtn.addEventListener('click', function(e) {
    calculate(calcData);
    resultTitle.textContent = calcData.result;
});

resetBtn.addEventListener('click', resetCalculator);


























