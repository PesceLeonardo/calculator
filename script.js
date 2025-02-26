// Operator Functions

import {add, subtract, multiply, isZero, divide, integerDivide, modulusDivide, changeSign} from "./operatorFunctions.js"

// DOM Elements

const digitsNodeList = document.querySelectorAll(".number");
const operatorsNodeList = document.querySelectorAll(".operator");

const plusOperator = document.querySelector(".addition");
const minusOperator = document.querySelector(".subtraction");
const multOperator = document.querySelector(".multiplication");
const divisionOperator = document.querySelector(".division");

const integerDivisionOperator = document.querySelector(".integer-division");
const modulusOperator = document.querySelector(".modulus");

const changeSignOperator = document.querySelector(".sign");

const addDecimalOperator = document.querySelector(".dot");

const C_clearOperator = document.querySelector(".C");
const AC_clearAllOperator = document.querySelector(".AC");

const equalOperator = document.querySelector(".equal");

const calculatorDisplay = document.querySelector(".number-text");
const operatorDisplay = document.querySelector(".operator-text");



// Global Variables

const elements = {
  firstOperand: "",
  operationFunction: null,
  secondOperand: "",
};

let overwriteDisplay = false;

// Enter Digits

digitsNodeList.forEach(digitButton => digitButton.addEventListener("click", function(e) {
  const digit = e.target.textContent;
  if (overwriteDisplay) calculatorDisplay.textContent = "";
  if (calculatorDisplay.textContent === "0") calculatorDisplay.textContent = "";
  if (calculatorDisplay.textContent.length < 13) calculatorDisplay.textContent += digit;
}));

operatorsNodeList.forEach(operatorButton => operatorButton.addEventListener("click", function(e) {
  elements.firstOperand = calculatorDisplay.textContent;
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

  const result = elements.operationFunction(elements.firstOperand, elements.secondOperand);
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

