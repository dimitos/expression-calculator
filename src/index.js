function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  expr = expr.replace(/ /g, ''); // remove all spaces
  if (expr.indexOf('/0') !== -1)
    // if the line contains division by 0, then throw an 'TypeError'
    throw new Error('TypeError: Division by zero.');

  // count open and closed parentheses
  let brackets = 0;
  expr.split('').forEach((el) => {
    el === '(' ? brackets++ : false;
    el === ')' ? brackets-- : false;
  });

  if (brackets !== 0)
    // if there are unpaired parentheses, then throw an'TypeError'
    throw new Error('ExpressionError: Brackets must be paired');

  // insert string expression into function body
  expr = new Function('return ' + expr);

  // run new Function and return value
  return expr();
}

module.exports = {
    expressionCalculator
}