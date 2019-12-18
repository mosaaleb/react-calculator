import Parser from '../Parser';

describe('basic mathematical operations', () => {
  test('generate postfix notation from infix sum', () => {
    const infix = '3 + 4';
    const postfix = Parser.infixToPostfix(infix);
    expect(postfix).toBe('3 4 +');
  });

  test('generate postfix notation from infix multiply', () => {
    const infix1 = '5 × 6 + 8 - 9 × 10';
    const postfix1 = Parser.infixToPostfix(infix1);
    expect(postfix1).toBe('5 6 × 8 + 9 10 × -');
  });

  test('generate postfix notation from infix multiply', () => {
    const infix = '2 × 3 + 5 + 7';
    const postfix = Parser.infixToPostfix(infix);
    expect(postfix).toBe('2 3 × 5 + 7 +');
  });

  test('generate postfix notation from infix division', () => {
    const infix = '5 × 6 ÷ 8 - 9 ÷ 1110';
    const postfix = Parser.infixToPostfix(infix);
    expect(postfix).toBe('5 6 × 8 ÷ 9 1110 ÷ -');
  });

  test('generate postfix from infix with lots of spaces', () => {
    const infix = '5 ×    6 ÷   8 - 9 ÷ 1110';
    const postfix = Parser.infixToPostfix(infix);
    expect(postfix).toBe('5 6 × 8 ÷ 9 1110 ÷ -');
  });
});

describe('unary operator -', () => {
  test('does not throw error for in middle - unary', () => {
    const infix = '99 + -6';
    expect(() => {
      Parser.infixToPostfix(infix);
    }).not.toThrow();
  });

  test('does not throw error for in beginning - unary', () => {
    const infix = '-99 + -6 × -9';
    expect(() => {
      Parser.infixToPostfix(infix);
    }).not.toThrow();
  });

  test('generate postfix notation from infix with - unary', () => {
    const infix = '3 × 5 - 9 × -4';
    expect(Parser.infixToPostfix(infix)).toBe('3 5 × 9 -4 × -');
  });

  test('generate postfix notation from infix with mutiple - unary', () => {
    const infix = '3 × -5 - -9 × -4';
    expect(Parser.infixToPostfix(infix)).toBe('3 -5 × -9 -4 × -');
  });
});

describe('invalid expressions', () => {
  test('throws error for extra plus sign', () => {
    const infix = '5 × 6 ÷ 8 - 9 ÷ 10 +';
    expect(() => {
      Parser.infixToPostfix(infix);
    }).toThrow();
  });

  test('throws error for extra unary minus sign', () => {
    const infix = '58× 34 ÷ 8 - 9 ÷ - 10';
    expect(() => {
      Parser.infixToPostfix(infix);
    }).toThrow();
  });
});
