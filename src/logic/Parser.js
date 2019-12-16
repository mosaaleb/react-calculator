const Parser = (() => {
  let outPutQueue = '';
  const stack = [];
  const precedence = {
    '÷': 3,
    '×': 3,
    '+': 2,
    '-': 2
  };

  // eslint-disable-next-line no-restricted-globals
  const isNumeric = (token) => !isNaN(parseFloat(token)) && isFinite(token);

  const cleanInfix = (infix) => {
    const withoutSpaces = infix.replace(/\s/g, '');
    const splitted = withoutSpaces.split(/([+\-×÷])/);
    return splitted.filter((item) => item);
  };

  const infixToPostfix = (infix) => {
    const infixArray = cleanInfix(infix);
    infixArray.forEach((token) => {
      if (isNumeric(token)) {
        outPutQueue += `${token} `;
      } else {
        let last = stack[stack.length - 1];
        while ('+-×÷'.indexOf(last) !== -1 && (precedence[token] <= precedence[last])) {
          outPutQueue += `${stack.pop()} `;
          last = stack[stack.length - 1];
        }
        stack.push(token);
      }
    });
    while (stack.length > 0) {
      outPutQueue += `${stack.pop()} `;
    }
    return outPutQueue;
  };

  return { infixToPostfix };
})();

export default Parser;
