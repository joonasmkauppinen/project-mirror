import React, { useState } from 'react';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import { login } from '../../utils/apicall';
import { useHistory } from 'react-router-dom';

import styles from './LoginPage.module.scss';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { ReactComponent as PeiliLogo } from '../../assets/outlined/peili-official-logo-outline_ic.svg';

import Toolbar from '../../components/Toolbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  // TODO: remove disable when validation is implemented
  // eslint-disable-next-line no-unused-vars
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState('');
  // TODO: remove disable when validation is implemented
  // eslint-disable-next-line no-unused-vars
  const [passwordError, setPasswordError] = useState();
  const history = useHistory();
  const emailLabel = t(D.LOGIN.email_lable);
  const emailPlaceholder = t(D.LOGIN.email_placeholder);
  const passwordLabel = t(D.LOGIN.password_label);
  const loginLabel = t(D.LOGIN.login_btn);
  const navigateToMain = () => history.replace('/main');

  const handleLoginClick = async () => {
    const { success, error } = await login(email, password);
    if (success) navigateToMain();
    else alert(error);
  };

  const handleEmailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handlePasswordChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  return (
    <div className={styles.container}>
      <div>
        <Toolbar />
      </div>
      <div className={styles.scrollable}>
        <section className={styles.logoContainer}>
          <PeiliLogo className={styles.logo} />
          <h1>Peili</h1>
        </section>
        <form className={styles.formSection}>
          <TextInput
            value={email}
            label={emailLabel}
            type="email"
            errorMessage={emailError}
            placeholder={emailPlaceholder}
            onChange={handleEmailChange}
            focus="true"
          />
          <TextInput
            value={password}
            label={passwordLabel}
            type="password"
            errorMessage={passwordError}
            placeholder="••••••••"
            onChange={handlePasswordChange}
            style={{ marginTop: '16px' }}
          />
          <Button
            label={loginLabel}
            style={{ margin: '32px 0 64px' }}
            onClick={handleLoginClick}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
