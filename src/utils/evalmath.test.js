import { evalMath } from './evalmath.js';

test('basic-mathematics-add', () => {
  const result = evalMath('4+2');
  expect(result).toBe(6);
});

test('basic-mathematics-subtract', () => {
  const result = evalMath('4-2');
  expect(result).toBe(2);
});

test('basic-mathematics-order', () => {
  const result = evalMath('1+2*3');
  expect(result).toBe(7);
});

test('basic-mathematics-brackets', () => {
  const result = evalMath('(1+2)*3');
  expect(result).toBe(9);
});

test('basic-conditional-logical-expression', () => {
  const result = evalMath('4 < 5');
  expect(result).toBe(true);
});

test('basic-conditional-logical-expression2', () => {
  const result = evalMath('4 > 5');
  expect(result).toBe(false);
});

test('basic-conditional-logical-expression3', () => {
  const result = evalMath('1 == 1 and 2 == 2 and 3 != 4');
  expect(result).toBe(true);
});
