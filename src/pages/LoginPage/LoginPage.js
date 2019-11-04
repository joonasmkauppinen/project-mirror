import React from 'react';
import styles from '../PageContainer.module.scss';
import Header from '../../components/Header';
import Text from '../../components/Text';

import { t } from '../../utils/translate';
import { login } from '../../utils/apicall';

const setButtonStateEnabled = state => {
  let b = document.getElementById('btn');
  b.disabled = !state;
};

const btnLoginClick = () => {
  setButtonStateEnabled(false);
  let un = document.getElementById('un');
  let pw = document.getElementById('pw');
  login(un.value, pw.value).then(response => {
    if (response.success) {
      window.location.reload(true);
    } else {
      alert(response.error);
      setButtonStateEnabled(true);
    }
  });
};

const LoginPage = () => (
  <div className={styles.container}>
    <Header>Landing page</Header>
    <Text>Bayern Ipsum Dolor Sit Amet.</Text>
    <input id="un" type="text" placeholder={t('username')} />
    <input id="pw" type="password" placeholder={t('password')} />
    <button id="btn" type="button" onClick={btnLoginClick}>
      {t('login')}
    </button>
  </div>
);

export default LoginPage;
