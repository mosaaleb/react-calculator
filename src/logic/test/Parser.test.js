import Parser from '../Parser';

test('generate postfix notation from infix sum', () => {
  const infix = '3 + 4';
  const postfix = Parser.infixToPostfix(infix);
  expect(postfix).toBe('3 4 +');
});

test('generate postfix notation from infix multiply', () => {
  const infix = '2 × 3 + 5 + 7';
  const postfix = Parser.infixToPostfix(infix);
  expect(postfix).toBe('2 3 × 5 + 7 +');
});

test('generate postfix notation from infix multiply', () => {
  const infix = '5 × 6 + 8 - 9 × 10';
  const postfix = Parser.infixToPostfix(infix);
  expect(postfix).toBe('5 6 × 8 + 9 10 × -');
});

test('generate postfix notation from infix division', () => {
  const infix = '5 × 6 ÷ 8 - 9 ÷ 10';
  const postfix = Parser.infixToPostfix(infix);
  expect(postfix).toBe('5 6 × 8 ÷ 9 10 ÷ -');
});
