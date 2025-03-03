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



// Global Variables

const MAX_LENGTH = 13;

const elements = {
  firstOperand: "",
  operationFunction: null,
  secondOperand: "",
};

let overwriteDisplay = false;



// Enter Digits

digitsNodeList.forEach(digitButton => digitButton.addEventListener("click", function(e) {
  const digit = e.target.textContent;
  if (overwriteDisplay) {
    calculatorDisplay.textContent = "";
    overwriteDisplay = false;
  }
  if (calculatorDisplay.textContent === "0") calculatorDisplay.textContent = "";
  if (calculatorDisplay.textContent.length < MAX_LENGTH) calculatorDisplay.textContent += digit;
}));



// Decimal

addDecimalOperator.addEventListener("click", function() {
  if (!calculatorDisplay.textContent.includes(".")) {
    if (overwriteDisplay) calculatorDisplay.textContent = "0";
    calculatorDisplay.textContent += ".";
  }
});


// Choose Operation

operatorsNodeList.forEach(operatorButton => operatorButton.addEventListener("click", function(e) {
  if (elements.firstOperand === "") elements.firstOperand = calculatorDisplay.textContent;

  calculatorDisplay.textContent = 0;

  const operatorString = e.target.textContent;
  operatorDisplay.textContent = operatorString;

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
}));



// Operations

equalOperator.addEventListener("click", function() {
  elements.secondOperand = calculatorDisplay.textContent;

  let result = String(elements.operationFunction(elements.firstOperand, elements.secondOperand));
  if (result.length > MAX_LENGTH) result = result.slice(0, MAX_LENGTH);
  calculatorDisplay.textContent = result;

  operatorDisplay.textContent = "";

  overwriteDisplay = true;
});



// C / AC

C_clearOperator.addEventListener("click", function() {
  calculatorDisplay.textContent = "0";
});

AC_clearAllOperator.addEventListener("click", function() {
  calculatorDisplay.textContent = "0";
  operatorDisplay.textContent = "";

  elements.firstOperand = "";
  elements.operationFunction = null;
  elements.secondOperand = "";
});



// Change Sign

changeSignOperator.addEventListener("click", function() {
  calculatorDisplay.textContent = changeSign(calculatorDisplay.textContent);
});
