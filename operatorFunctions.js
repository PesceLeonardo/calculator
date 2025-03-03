const MAX_LIMIT = 9999999999999;

function checkNumberMaximum(num, max) {
  if (Math.abs(num) > max) return true;
  return false;
}
function isZero(n) {
  if (n === 0) return true;
  return false;
}

export function add(a, b) {
  const result = +a + +b;
  if (checkNumberMaximum(result, MAX_LIMIT)) return Infinity;
  return result;
}

export function subtract(a, b) {
  const result = +a - +b;
  if (checkNumberMaximum(result, MAX_LIMIT)) return Infinity;
  return result;
}

export function multiply(a, b) {
  const result = +a * +b;
  if (checkNumberMaximum(result, MAX_LIMIT)) return Infinity;
  return result;
}

export function divide(a, b) {
  const result = isZero(+b) ? "Error: division by 0" : +a / +b;
  if (checkNumberMaximum(result, MAX_LIMIT)) return Infinity;
  return result;
}

export function integerDivide(a, b) {
  const result = isZero(+b) ? "Error: division by 0" : Math.floor(+a / +b);
  if (checkNumberMaximum(result, MAX_LIMIT)) return Infinity;
  return result;
}

export function modulusDivide(a, b) {
  const result = isZero(+b) ? "Error: division by 0" : +a % +b;
  if (checkNumberMaximum(result, MAX_LIMIT)) return Infinity;
  return result;
}

export function changeSign(n) {
  const result = - +n;
  if (checkNumberMaximum(result, MAX_LIMIT)) return Infinity;
  return result;
}

