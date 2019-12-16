import Parser from './Parser';

const Expression = (() => {
  const result = [];
  // eslint-disable-next-line no-restricted-globals
  const isNumeric = (token) => !isNaN(parseFloat(token)) && isFinite(token);

  const calculate = (x, y, operator) => {
    switch (operator) {
      case '+':
        return parseInt(x, 10) + parseInt(y, 10);
      case '-':
        return parseInt(x, 10) - parseInt(y, 10);
      case '×':
        return parseInt(x, 10) * parseInt(y, 10);
      default:
        return parseInt(x, 10) / parseInt(y, 10);
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
    return result.length > 1 ? 'invalid operation' : result.pop();
  };

  return { evaluate };
})();

export default Expression;
