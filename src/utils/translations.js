const translations = {
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
  login: { en: 'Login', fi: 'Kirjaudu' },
  logout: { en: 'Logout', fi: 'Logout' },

  TABS: {
    home: { en: 'Home', fi: 'Koti' },
    discover: { en: 'Discover', fi: 'Löydä' },
    chat: { en: 'Chat', fi: 'Chat' },
    profile: { en: 'Profile', fi: 'Profiili' },
  },

  LOGIN: {
    message: {
      en: 'Welcome to peili. Please login with your username and password.',
      fi:
        'Tervetuloa peiliin. Kirjaudu syöttämällä käyttäjänimi sekä salasana.',
    },
    fill_missing_field: {
      en: 'Please, fill the missing field',
      fi: 'Täytä puuttuva kenttä',
    },
  },

  PROFILE: {
    title: { en: 'Profile tab', fi: 'Profiili-tabi' },
  },

  LOGOUT: {
    confirm: {
      en: 'Are you sure you want to log out?',
      fi: 'Haluatko varmasti kirjautua ulos?',
    },
  },
};

export default translations;
