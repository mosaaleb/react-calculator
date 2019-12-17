import Expression from '../Expression';

test('evaluate prefix result with multiplication', () => {
  const infix = '2 × 3 + 5 + 7';
  const result = Expression.evaluate(infix);
  expect(result).toBe(18);
});

// test('evaluate prefix result with only addition', () => {
//   const infix = '3 + 4';
//   const result = Expression.evaluate(infix);
//   expect(result).toBe(7);
// });

test('evaluate prefix result with multiplication', () => {
  const infix = '2 × 3 + 5 + 7';
  const result = Expression.evaluate(infix);
  expect(result).toBe(18);
});

// test('evaluate prefix result with division', () => {
//   const infix = '2 × 3 + 5 ÷ 7 × 9 ÷ 18';
//   const result = Expression.evaluate(infix);
//   expect(result).toBe(6);
// });

// test('evaluate prefix result with substraction', () => {
//   const infix = '2 × 3 + 52 - 234 - 9 - 18';
//   const result = Expression.evaluate(infix);
//   expect(result).toBe(-203);
// });
