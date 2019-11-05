import React, { useState } from 'react';
import { t } from '../../utils/translate';
import { login } from '../../utils/apicall';
import { useHistory } from 'react-router-dom';

import styles from './LoginPage.module.scss';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { ReactComponent as PeiliLogo } from '../../assets/outlined/peili-official-logo-outline_ic.svg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState();
  const history = useHistory();
  const navigateToMain = () => history.push('/main');

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
      <section className={styles.logoContainer}>
        <PeiliLogo className={styles.logo} />
        <h1>Peili</h1>
      </section>
      <form className={styles.formSection}>
        <TextInput
          value={email}
          label="Email"
          type="email"
          errorMessage={emailError}
          placeholder="john.doe@email.com"
          onChange={handleEmailChange}
        />
        <TextInput
          value={password}
          label="Password"
          type="password"
          errorMessage={passwordError}
          placeholder="••••••••"
          onChange={handlePasswordChange}
          style={{ marginTop: '16px' }}
        />
        <Button
          label="Login"
          style={{ margin: '32px 0 64px' }}
          onClick={handleLoginClick}
        />
      </form>
    </div>
  );
};

export default LoginPage;
