import { validateEmail } from './validate';

// test for email validation success
test('validate-email-success', () => {
  expect(validateEmail('samppa@gmail.com')).toBe(true);
  expect(validateEmail('as@mail.fi')).toBe(true);
  expect(
    validateEmail('super.long.email_address1981248124@myprovider.gov'),
  ).toBe(true);
});

test('validate-email-fail', () => {
  expect(validateEmail('samppa@gmail')).toBe(false);
  expect(validateEmail('myemail@addr@ess.fi')).toBe(false);
  expect(validateEmail('')).toBe(false);
});
