/*

    ██████╗ ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗ █████╗ ██████╗ ██╗   ██╗
    ██╔══██╗██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝
    ██║  ██║██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████║██████╔╝ ╚████╔╝ 
    ██║  ██║██║██║        ██║   ██║██║   ██║██║╚██╗██║██╔══██║██╔══██╗  ╚██╔╝  
    ██████╔╝██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║██║  ██║██║  ██║   ██║   
    ╚═════╝ ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                                                                                                      
    
    ███ © 2019 Team Alpha ████████████████████████████████████████████████████


    All the Frontend App Translations are found here!
    Currenlty implemented Finnish and English.
                                          
*/

import moment from 'moment';

const setDateFormatToFinnish = () => {
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    const format = {
      m: ['minuutti', 'minuutin'],
      mm: [number + ' minuuttia', number + ' minuutin'],
      h: ['tunti', 'tunnin'],
      hh: [number + ' tuntia', number + ' tunnin'],
      d: ['päivä', 'päivän'],
      dd: [number + ' päivää', number + ' päivän'],
      M: ['kuukausi', 'kuukauden'],
      MM: [number + ' kuukautta', number + ' kuukauden'],
      y: ['vuosi', 'vuoden'],
      yy: [number + ' vuotta', number + ' vuoden'],
    };
    return !isFuture ? format[key][0] : format[key][1];
  }

  return moment.defineLocale('fi', {
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
      '_',
    ),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split(
      '_',
    ),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split(
      '_',
    ),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'Do MMMM[ta] YYYY',
      LLL: 'Do MMMM[ta] YYYY, [klo] LT',
      LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] LT',
      l: 'D.M.YYYY',
      ll: 'Do MMM YYYY',
      lll: 'Do MMM YYYY, [klo] LT',
      llll: 'ddd, Do MMM YYYY, [klo] LT',
    },
    calendar: {
      sameDay: '[tänään] [klo] LT',
      nextDay: '[huomenna] [klo] LT',
      nextWeek: 'dddd [klo] LT',
      lastDay: '[eilen] [klo] LT',
      lastWeek: '[viime] dddd[na] [klo] LT',
      sameElse: 'L',
    },
    relativeTime: {
      future: '%s päästä',
      past: '%s sitten',
      s: 'hetki',
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime,
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  });
};

export default {
  translation_test: { en: 'EN', fi: 'FI' },
  TRANSLATION_TESTS: {
    subelement: { en: 'MD-TEST-1', fi: 'MD-TEST-1' },
    path2: {
      path3: {
        path4: { en: 'MD-TEST-2', fi: 'MD-TEST-2' },
      },
    },
  },

  username: { en: 'User Name', fi: 'Käyttäjänimi' },
  password: { en: 'Password', fi: 'Salasana' },
  password_repeat: { en: 'Repeat Password', fi: 'Vahvista salasana' },
  birthday: { en: 'Birthdate', fi: 'Syntymäpäivä' },
  firstname: { en: 'Firstname', fi: 'Etunimi' },
  surname: { en: 'Lastname', fi: 'Sukunimi' },
  email: { en: 'Email', fi: 'Sähköpostiosoite' },
  login: { en: 'Login', fi: 'Kirjaudu' },
  logout: { en: 'Logout', fi: 'Logout' },
  birthdate: { en: 'Birthdate', fi: 'Syntymäpäivä' },

  FORM_ERRORS: {
    required_field: {
      en: 'Required field.',
      fi: 'Pakollinen kenttä.',
    },
    invalid_email: {
      en: 'Please enter a valid email address.',
      fi: 'Syötä validi sähköpostiosoite.',
    },
    password_too_short: {
      en: 'Password needs to be atleast 6 characters long.',
      fi: 'Salasanan tulee olla vähintään 6 merkkiä pitkä.',
    },
    passwords_dont_match: {
      en: "Passwords don't match.",
      fi: 'Salasanat eivät täsmää.',
    },
  },

  TABS: {
    home: { en: 'Home', fi: 'Koti' },
    discover: { en: 'Discover', fi: 'Löydä' },
    chat: { en: 'Chat', fi: 'Viestit' },
    profile: { en: 'Profile', fi: 'Profiili' },
  },

  LANDING: {
    login_btn: { en: 'Login', fi: 'Kirjaudu' },
    singup_btn: { en: 'Create account', fi: 'Luo käyttäjä' },
    hero_section_description: {
      en: 'Find your strengths with artificial intelligence.',
      fi: 'Löydä vahvuutesi tekoälyllä.',
    },
    hero_section_hint: {
      en: 'To begin create an account or login.',
      fi: 'Aloittaaksesi luo käyttäjä tai kirjaudu sisään.',
    },
  },

  PLACEHOLDERS: {
    password: {
      en: '••••••••',
      fi: '••••••••',
    },
    email: {
      en: 'john.doe@email.com',
      fi: 'matti.meikalainen@email.com',
    },
    firstname: {
      en: 'Firstname',
      fi: 'Etunimi',
    },
    lastname: {
      en: 'Lastname',
      fi: 'Sukunimi',
    },
    birthdate: {
      en: '1.1.2001',
      fi: '1.1.2001',
    },
  },

  SIGNUP: {
    title: {
      en: 'Create account',
      fi: 'Luo käyttäjä',
    },
    teaser: {
      en: 'Create your new Peili-account by filling the following fields.',
      fi: 'Luo itsellesi uusi Peili-käyttäjä täyttämällä alla olevat tiedot.',
    },
    invalid_email: {
      en: 'Email is invalid.',
      fi: 'Tarkasta Sähköpostiosoite',
    },
    password_tooshort: {
      en: 'Password needs to be longed.',
      fi: 'Salasanan tulee olla pitempi',
    },
    button_signup: {
      en: 'Sign Up',
      fi: 'Rekisteröidy',
    },
  },

  LOGIN: {
    title: {
      en: 'Login',
      fi: 'Kirjaudu',
    },
    username_label: {
      en: 'Username',
      fi: 'Käyttäjänimi',
    },
    email_lable: {
      en: 'Email',
      fi: 'Sähköposti',
    },
    email_placeholder: {
      en: 'john.doe@email.com',
      fi: 'matti.meikäläinen@email.com',
    },
    password_label: {
      en: 'Password',
      fi: 'Salasana',
    },
    login_btn: {
      en: 'Login',
      fi: 'Kirjaudu Sisään',
    },
  },

  PROFILE: {
    title: { en: 'Profile tab', fi: 'Profiili-tabi' },
    teaser: { en: 'This is the Profile Tab', fi: 'Tää on Profiili-tabi' },
    points: { en: 'points', fi: 'pisteet' },
    level: { en: 'level', fi: 'taso' },
    history: { en: 'My history', fi: 'Oma historia' },
  },

  LOGOUT: {
    confirm: {
      en: 'Are you sure you want to log out?',
      fi: 'Haluatko varmasti kirjautua ulos?',
    },
  },

  HOME: {
    title: { en: 'Hi,', fi: 'Hei,' },
  },

  SETTINGS: {
    title: { en: 'Settings', fi: 'Asetukset' },
    notif: {
      header: { en: 'Notifications', fi: 'Ilmoitukset' },
      title: { en: 'Allow notifications', fi: 'Salli ilmoitukset' },
      body: {
        en: "You'll receive notifications for important things",
        fi: 'Saat ilmoituksia tärkeistä asioista',
      },
    },
    location: {
      header: { en: 'Location', fi: 'Sijaintitiedot' },
      title: { en: 'Allow use of location data', fi: 'Salli sijaintitiedot' },
      body: {
        en: 'Location data will help us give you better suggestions',
        fi: 'Sijainititiedot auttavat tarjoamaan sinulle parempia ehdotuksia.',
      },
    },
    logout: { en: 'Logout', fi: 'Kirjaudu ulos' },
    cancel: { en: 'Cancel', fi: 'Peruuta' },
    confirm: {
      en: 'Are you sure you want to log out?',
      fi: 'Haluatko varmasti kirjautua ulos?',
    },
  },

  DISCOVER: {
    organizations: { en: 'Organizations', fi: 'Organisaatiot' },
    events: { en: 'New events', fi: 'Uudet tapahtumat' },
  },

  ORG_DETAILS: {
    description: { en: 'Description', fi: 'Kuvaus' },
    website: { en: 'Organization website', fi: 'Organisaation nettisivut' },
    follow: { en: 'Follow', fi: 'Seuraa' },
    unfollow: { en: 'Unfollow', fi: 'Älä seuraa' },
  },

  EVENT_DETAILS: {
    in_short: { en: 'In Short', fi: 'Lyhyesti' },
    date_when: { en: 'When', fi: 'Ajankohta' },
    starts: { en: 'Starts', fi: 'Alkaa' },
    ends: { en: 'Ends', fi: 'Päättyy' },
    full_description: { en: 'Full Description', fi: 'Tapahtumakuvaus' },
    arranged_by: { en: 'Arranged By', fi: 'Järjestävä Organisaatio' },
  },

  POST_DETAILS: {
    full_text: { en: 'Full Post', fi: 'Koko teksti' },
    by_organization: { en: 'Posted By', fi: 'Lähettäjä' },
    in_short: { en: 'In short', fi: 'Lyhyesti' },
  },

  DATE_FINNISH: setDateFormatToFinnish(),
};
