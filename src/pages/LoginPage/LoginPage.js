import React from 'react';
import styles from '../PageContainer.module.scss';
import Header from '../../components/Header';
import Text from '../../components/Text';
import { useHistory } from 'react-router-dom';

import { t } from '../../utils/translate';
import { login } from '../../utils/apicall';

const LoginPage = () => {
  const history = useHistory();
  const navigateToMain = () => history.push('/main');

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
        navigateToMain();
      } else {
        alert(response.error);
        setButtonStateEnabled(true);
      }
    });
  };

  return (
    <div className={styles.container}>
      <Header>Login page</Header>
      <Text>Bayern Ipsum Dolor Sit Amet.</Text>
      <input id="un" type="text" placeholder={t('username')} />
      <input id="pw" type="password" placeholder={t('password')} />
      <button id="btn" type="button" onClick={btnLoginClick}>
        {t('login')}
      </button>
    </div>
  );
};

export default LoginPage;
