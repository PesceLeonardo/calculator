const MAX_LIMIT = 9999999999999;
const LEN_LIMIT = 13;

function checkNumberMaximum(num, max=MAX_LIMIT) {
  if (Math.abs(num) > max) return true;
  return false;
}

function checkNumberMinimum(num, min=LEN_LIMIT) {
  if (String(num).length > min) return true;
  return false;
}

function isZero(n) {
  if (n === 0) return true;
  return false;
}

export function add(a, b) {
  const result = +a + +b;
  if (checkNumberMaximum(result)) return Infinity;
  return result;
}

export function subtract(a, b) {
  const result = +a - +b;
  if (checkNumberMaximum(result)) return Infinity;
  return result;
}

export function multiply(a, b) {
  const result = +a * +b;
  if (checkNumberMaximum(result)) return Infinity;
  if (checkNumberMinimum(result)) return +result.toFixed(11);
  return result;
}

export function divide(a, b) {
  const result = isZero(+b) ? "Error" : +a / +b;
  if (checkNumberMaximum(result)) return Infinity;
  if (checkNumberMinimum(result)) return +result.toFixed(11);
  return result;
}

export function integerDivide(a, b) {
  const result = isZero(+b) ? "Error" : Math.floor(+a / +b);
  if (checkNumberMaximum(result)) return Infinity;
  if (checkNumberMinimum(result)) return +result.toFixed();
  return result;
}

export function modulusDivide(a, b) {
  const result = isZero(+b) ? "Error" : +a % +b;
  if (checkNumberMaximum(result)) return Infinity;
  if (checkNumberMinimum(result)) return +result.toFixed(11);
  return result;
}

export function changeSign(n) {
  const result = - +n;
  return result;
}

