let language = 'en';

const translations = {
  username: { en: 'User Name', fi: 'Käyttäjänimi' },
  password: { en: 'Password', fi: 'Salasana' },
  login: { en: 'Login', fi: 'Kirjaudu' },
};

const t = text => {
  if (typeof translations[text] !== 'undefined') {
    if (typeof translations[text][language] !== 'undefined') {
      return translations[text][language];
    } else {
      console.log(
        `Translation of word [${text}] is missing in language [${language}]`,
      );
      return '?' + text + '?';
    }
  } else {
    console.log(`Translation of word [${text}] is missing completely.`);
    return '??' + text + '??';
  }
};

export default t;
