import { deleteCookie, getCookie, setCookie } from './cookies';

// test translating in all available languages
test('set-get-cookie', () => {
  setCookie('testcookie', 'test');
  expect(getCookie('testcookie')).toBe('test');
});

// test translating in all available languages
test('delete-cookie', () => {
  setCookie('testcookie', 'test');
  expect(getCookie('testcookie')).toBe('test');
  deleteCookie('testcookie');
  expect(getCookie('testcookie')).toBe('');
});
