import Big from 'big.js';
import Parser from './Parser';

const Expression = (() => {
  const result = [];
  // eslint-disable-next-line no-restricted-globals
  const isNumeric = (token) => !isNaN(parseFloat(token)) && isFinite(token);

  const round = (value, decimals) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);

  const calculate = (x, y, operator) => {
    switch (operator) {
      case '+':
        return Big(x).plus(Big(y));
      case '-':
        return Big(x).minus(Big(y));
      case '×':
        return Big(x).mul(Big(y));
      case '%':
        return Big(x).mod(Big(y));
      default:
        return Big(x).div(Big(y));
    }
  };

  const evaluate = (infix) => {
    const postfix = Parser.infixToPostfix(infix);
    const postfixArray = postfix.split(' ');
    postfixArray.forEach((token) => {
      if (isNumeric(token)) {
        result.push(token);
      } else {
        const a = result.pop();
        const b = result.pop();
        result.push(calculate(b, a, token));
      }
    });

    return round(result.pop(), 2);
  };

  return { evaluate };
})();

export default Expression;
