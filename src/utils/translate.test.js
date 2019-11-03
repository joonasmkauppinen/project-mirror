import { t, setLanguage, getLanguages } from './translate';

// test translating in all available languages
// (test string is 'translation_test',
// that should return language code in uppercased strings)
test('translate', () => {
  for (let code in getLanguages()) {
    setLanguage(code);
    expect(t('translation_test')).toBe(code.toUpperCase());
  }
});

test('translate-multidimensional', () => {
  setLanguage('en');
  expect(t('TRANSLATION_TESTS.subelement')).toBe('MD-TEST-1');
  expect(t('TRANSLATION_TESTS.path2.path3.path4')).toBe('MD-TEST-2');
});
