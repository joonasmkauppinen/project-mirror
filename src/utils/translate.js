/*

    ████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗      █████╗ ████████╗███████╗
    ╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║     ██╔══██╗╚══██╔══╝██╔════╝
       ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║     ███████║   ██║   █████╗  
       ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║     ██╔══██║   ██║   ██╔══╝  
       ██║   ██║  ██║██║  ██║██║ ╚████║███████║███████╗██║  ██║   ██║   ███████╗
       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝                                                                                                                   
    
    ███ © 2019 Team Alpha █████████████████████████████████████████████████████
                                          
*/

import d from './dictionary';
import { getCookie, setCookie } from './cookies';
import moment from 'moment';

let language = 'en';

language = getCookie('site_language');

/* Get available languages */
const getLanguages = () => {
  let lang = [];
  lang['en'] = 'English';
  lang['fi'] = 'Suomi (Finnish)';
  return lang;
};

/* Set Current Language */
const setLanguage = newLanguage => {
  language = newLanguage;
  setCookie('site_language', newLanguage);
};

if (typeof getLanguages()[language] === 'undefined') {
  language = 'en';
}

if (language === 'fi') {
  moment.locale('fi', d.DATE_FINNISH);
} else {
  moment.locale('en');
}

/* Translate Object value */
const objectTranslate = object => {
  let element = object[language];
  if (typeof element !== 'undefined') {
    return element;
  } else {
    return '{?}';
  }
};

/* Get translation from JSON Dictionary Structure */
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

/* Translate "t" function - performs any translation by any kind of input data value */
const t = text => {
  if (typeof text === 'undefined') {
    return '{undefined}';
  }
  if (typeof text === 'object') {
    return objectTranslate(text);
  }
  return getTranslation(text.split('.'), d, 0);
};

export { t, setLanguage, getLanguages, language };
