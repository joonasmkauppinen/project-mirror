/*

    ████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗      █████╗ ████████╗███████╗
    ╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║     ██╔══██╗╚══██╔══╝██╔════╝
       ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║     ███████║   ██║   █████╗  
       ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║     ██╔══██║   ██║   ██╔══╝  
       ██║   ██║  ██║██║  ██║██║ ╚████║███████║███████╗██║  ██║   ██║   ███████╗
       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝                                                                                                                   
    
    ███ © 2019 Team Alpha █████████████████████████████████████████████████████
                                          
*/

import d from './disctionary';
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

const objectTranslate = object => {
  let element = object[language];
  if (typeof element !== 'undefined') {
    return element;
  } else {
    return '{?}';
  }
};

const getTranslation = (path, data = [], inpath = 0) => {
  let element = data[path[inpath]];
  if (typeof element === 'undefined') {
    let wordpath = path.join('.');
    console.log(`Translation of word {${wordpath}} is missing completely.`);
    return `{${wordpath}}`;
  }
  if (path.length - 1 === inpath) {
    if (typeof element[language] !== 'undefined') {
      return element[language];
    } else {
      let wordpath = path.join('.');
      console.log(
        `Translation of word [${wordpath}] is missing in language version [${language}]`,
      );
      return `{${wordpath}}`;
    }
  } else {
    return getTranslation(path, element, inpath + 1);
  }
};

const t = text => {
  if (typeof text === 'object') {
    return objectTranslate(text);
  }
  return getTranslation(text.split('.'), d, 0);
};

export { t, setLanguage, getLanguages };
