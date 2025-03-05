// Operator Functions

import {add, subtract, multiply, divide, integerDivide, modulusDivide, changeSign} from "./operatorFunctions.js"



// DOM Elements

const digitsNodeList = document.querySelectorAll(".number");
const operatorsNodeList = document.querySelectorAll(".operator");

const changeSignOperator = document.querySelector(".sign");

const addDecimalOperator = document.querySelector(".dot");

const C_clearOperator = document.querySelector(".C");
const AC_clearAllOperator = document.querySelector(".AC");
const backspaceOperator = document.querySelector(".backspace");

const equalOperator = document.querySelector(".equal");

const calculatorDisplay = document.querySelector(".number-text");
const operatorDisplay = document.querySelector(".operator-text");
const signDisplay = document.querySelector(".sign-text");

const plusOperator = document.querySelector(".addition");
const minusOperator = document.querySelector(".subtraction");
const multOperator = document.querySelector(".multiplication");
const divisionOperator = document.querySelector(".division");
const intDivOperator = document.querySelector(".integer-division");
const modOperator = document.querySelector(".modulus");



// Global Variables

const MAX_LENGTH = 13;

const returnSelf = (a, b) => b;

const elements = {
  firstOperand: "",
  operationFunction: returnSelf,
  secondOperand: "",
};

const digits = "0123456789";

let slashCounter = 0;
let slashTimer;

let operatorSelected = false;
let overwriteDisplay = false;
let secondOperandSelected = false;


// Enter Digits

function enterDigits(digit) {
  if (overwriteDisplay) {
    calculatorDisplay.textContent = "";
    overwriteDisplay = false;
  }

  if (calculatorDisplay.textContent === "0")
    calculatorDisplay.textContent = "";

  if (calculatorDisplay.textContent.length < MAX_LENGTH)
    calculatorDisplay.textContent += digit;

  if (operatorSelected) secondOperandSelected = true;
}

digitsNodeList.forEach(digitButton => digitButton.addEventListener("click", function(e) {
  const digit = e.target.textContent;
  enterDigits(digit);
}));



// Decimal

addDecimalOperator.addEventListener("click", function() {
  if (!calculatorDisplay.textContent.includes(".")) {
    if (overwriteDisplay) calculatorDisplay.textContent = "0";
    calculatorDisplay.textContent += ".";
  }
});



// Operators

operatorsNodeList.forEach(operatorButton => operatorButton.addEventListener("click", function(e) {
  if (secondOperandSelected) {
    equalOperator.click();
  }
  
  if (!operatorSelected) {
    elements.firstOperand = checkSign(calculatorDisplay.textContent);
  }

  const operatorString = e.target.textContent;
  operatorDisplay.textContent = operatorString;

  overwriteDisplay = true;
  operatorSelected = true;
  secondOperandSelected = false;

  switch (operatorString) {
    case "+":
      elements.operationFunction = add;
      break;

    case "−":
      elements.operationFunction = subtract;
      break;

    case "×":
      elements.operationFunction = multiply;
      break;

    case "÷":
      elements.operationFunction = divide;
      break;

      case "%":
        elements.operationFunction = modulusDivide;
        break;

    case "//":
      elements.operationFunction = integerDivide;
      break;
  }

  signDisplay.textContent = "";
}));



// Equal Operator

equalOperator.addEventListener("click", function() {
  if (secondOperandSelected) {
    if (!operatorSelected) {
      elements.firstOperand = checkSign(calculatorDisplay.textContent);
    } else {
      elements.secondOperand = checkSign(calculatorDisplay.textContent);
    }

    const result = elements.operationFunction(elements.firstOperand, elements.secondOperand);
    if (result < 0) signDisplay.textContent = "neg";
    else signDisplay.textContent = "";
    calculatorDisplay.textContent = Math.abs(result);

    operatorDisplay.textContent = " ";

    overwriteDisplay = true;
    operatorSelected = false;
  }
});



// C / AC

function clear() {
  calculatorDisplay.textContent = "0";
}

function clearAll() {
  calculatorDisplay.textContent = "0";
  operatorDisplay.textContent = "";
  signDisplay.textContent = "";

  elements.firstOperand = "";
  elements.operationFunction = returnSelf;
  elements.secondOperand = "";

  operatorSelected = false;
  secondOperandSelected = false;
}

C_clearOperator.addEventListener("click", clear);

AC_clearAllOperator.addEventListener("click", clearAll);



// Backspace

function backspace() {
  calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
  if (calculatorDisplay.textContent === "")
    calculatorDisplay.textContent = "0";
}

backspaceOperator.addEventListener("click", backspace);



// Change Sign

changeSignOperator.addEventListener("click", switchSign);

function switchSign() {
  if (!signDisplay.textContent) signDisplay.textContent = "neg";
  else signDisplay.textContent = "";
}

function checkSign(num) {
  if (signDisplay.textContent === "neg") return changeSign(num);
  return num;
}



// Keyboard Support

document.addEventListener("keydown", function(e) {
  if (digits.includes(e.key)) {
    const digit = e.key;
    enterDigits(digit);

  } else if (e.key === "/") {
    slashCounter++;

    if (slashCounter === 1) {
      setTimeout(() => {
        slashCounter = 0;
      }, 300);
      divisionOperator.click();

    } else if (slashCounter >= 2) {
      slashCounter = 0;
      intDivOperator.click();
    }
  } else {
    switch (e.key) {
      case "+":         plusOperator.click();         break;
      case "-":         minusOperator.click();        break;
      case "*":         multOperator.click();         break;
      case "%":         modOperator.click();          break;
      case "Enter":     equalOperator.click();        break;
      case ".":         addDecimalOperator.click();   break;

      case "s":         switchSign();                 break;
      case "c":         clear();                      break;
      case "C":         clearAll();                   break;
      case "Backspace": backspace();                  break;
    }
  }
});

