const Parser = () => {
  const outPutQueue = '';
  const operatorStack = [];
  const operatorsPrecedence = {
    '÷': 3,
    '×': 3,
    '+': 2,
    '-': 2
  };

  // eslint-disable-next-line no-restricted-globals
  const isNumeric = (token) => !isNaN(parseFloat(token)) && isFinite(token);

  const cleanInfix = (infix) => {
    const withoutSpaces = infix.replace(/\s/g, '');
    // eslint-disable-next-line no-useless-escape
    const splitted = withoutSpaces.split(/([\+\-\×\÷])/);
    return splitted.filter((item) => item);
  };

  const infixToPostfix = (infix) => {
    const infixArray = cleanInfix(infix);
  };

  return { infixToPostfix };
};

export default Parser;
