const Parser = (() => {
  const validInfixRegex = /^\d+(\s*[+-×÷]\s*\d+)*$/;

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

  const resetParser = () => {
    outPutQueue = '';
    stack.splice(0, stack.length);
  };

  const validateInfix = (infix) => validInfixRegex.test(infix);

  const infixToPostfix = (infix) => {
    resetParser();
    const infixArray = cleanInfix(infix);
    if (!validateInfix(infix)) {
      throw new Error('Invalid Operation');
    }

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
    return outPutQueue.trim();
  };

  return { infixToPostfix };
})();

export default Parser;
