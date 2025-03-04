// Operator Functions

import {add, subtract, multiply, divide, integerDivide, modulusDivide, changeSign} from "./operatorFunctions.js"



// DOM Elements

const digitsNodeList = document.querySelectorAll(".number");
const operatorsNodeList = document.querySelectorAll(".operator");

const changeSignOperator = document.querySelector(".sign");

const addDecimalOperator = document.querySelector(".dot");

const C_clearOperator = document.querySelector(".C");
const AC_clearAllOperator = document.querySelector(".AC");

const equalOperator = document.querySelector(".equal");

const calculatorDisplay = document.querySelector(".number-text");
const operatorDisplay = document.querySelector(".operator-text");
const signDisplay = document.querySelector(".sign-text");



// Global Variables

const MAX_LENGTH = 13;

const returnSelf = (a, b) => b;

const elements = {
  firstOperand: "",
  operationFunction: returnSelf,
  secondOperand: "",
};

let operatorSelected = false;
let overwriteDisplay = false;



// Enter Digits

digitsNodeList.forEach(digitButton => digitButton.addEventListener("click", function(e) {
  const digit = e.target.textContent;

  if (overwriteDisplay) {
    calculatorDisplay.textContent = "";
    overwriteDisplay = false;
  }

  if (calculatorDisplay.textContent === "0")
    calculatorDisplay.textContent = "";

  if (calculatorDisplay.textContent.length < MAX_LENGTH)
    calculatorDisplay.textContent += digit;
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
  elements.firstOperand = checkSign(calculatorDisplay.textContent);
  
  const operatorString = e.target.textContent;
  operatorDisplay.textContent = operatorString;
  
  overwriteDisplay = true;
  operatorSelected = true;

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
  if (!operatorSelected) {
    elements.firstOperand = checkSign(calculatorDisplay.textContent);
  } else {
    elements.secondOperand = checkSign(calculatorDisplay.textContent);
  }

  const result = elements.operationFunction(elements.firstOperand, elements.secondOperand);
  if (result < 0) switchSign();
  calculatorDisplay.textContent = Math.abs(result);

  overwriteDisplay = true;
  operatorSelected = false;
});



// C / AC

C_clearOperator.addEventListener("click", function() {
  calculatorDisplay.textContent = "0";
});

AC_clearAllOperator.addEventListener("click", function() {
  calculatorDisplay.textContent = "0";
  operatorDisplay.textContent = "";
  signDisplay.textContent = "";

  elements.firstOperand = "";
  elements.operationFunction = returnSelf;
  elements.secondOperand = "";
});



// Change Sign

changeSignOperator.addEventListener("click", switchSign);

function switchSign() {
  if (!signDisplay.textContent) signDisplay.textContent = "-";
  else signDisplay.textContent = "";
}

function checkSign(num) {
  if (signDisplay.textContent === "-") return changeSign(num);
  return num;
}