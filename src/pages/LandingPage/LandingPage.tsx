import React from 'react';
import styles from '../PageContainer.module.css';
import Header from '../../components/Header';
import Text from '../../components/Text';

import {login} from '../../utils/apicall'

const setButtonStateEnabled = (state: boolean) => {
  let b : any = document.getElementById('btn');
  b.disabled = !state;
}

const btnLoginClick = () => {
  setButtonStateEnabled(false);
  let un: any = document.getElementById('un');
  let pw: any = document.getElementById('pw');
  login(un.value, pw.value).then((response: any) => {
    if (response.success) {
      window.location.reload(true);
    } else {
      alert(response.error);
      setButtonStateEnabled(true);
    }
  });
}

const LandingPage: React.FC = (): JSX.Element => (
  <div className={styles.container}>
    <Header>Landing page</Header>
    <Text>This will be the landing page.</Text>
    <input id="un" type="text" placeholder="username" />
    <input id="pw" type="password" placeholder="password" />
    <button id="btn" type="button" value="Lågga in" onClick={btnLoginClick}>
      Lågga in
    </button>
  </div>
);

export default LandingPage;
