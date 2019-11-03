import translations from './translations';
import { getCookie, setCookie } from './cookies';

let language = 'en';

language = getCookie('site_language');

const getLanguages = () => {
  let lang = [];
  lang['en'] = 'English';
  lang['fi'] = 'Suomi (Finnish)';
  return lang;
};

const setLanguage = newLanguage => {
  language = newLanguage;
  setCookie('site_language', newLanguage);
};

if (!getLanguages().includes(language)) {
  language = 'en';
}

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

export { t, setLanguage, getLanguages };
