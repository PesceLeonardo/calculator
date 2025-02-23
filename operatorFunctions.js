export function add(a, b) {
  return +a + +b;
}

export function subtract(a, b) {
  return +a - +b;
}

export function multiply(a, b) {
  return +a * +b;
}

export function isZero(n) {
  if (n === 0) return true;
  return false;
}

export function divide(a, b) {
  return isZero(+b) ? "Error: division by 0" : +a / +b;
}

export function integerDivide(a, b) {
  return isZero(+b) ? "Error: division by 0" : Math.floor(+a / +b);
}

export function modulusDivide(a, b) {
  return isZero(+b) ? "Error: division by 0" : +a % +b;
}

export function changeSign(n) {
  return - +n;
}

