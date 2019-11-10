import React, { useState } from 'react';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import { login } from '../../utils/apicall';
import { useHistory } from 'react-router-dom';
import { validateEmail } from '../../utils/validate';

import styles from './LoginPage.module.scss';
import PageContainer from '../../hoc/PageContainer';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Toolbar from '../../components/Toolbar';
import Icons from '../../assets/Icons';
import ScrollableContent from '../../hoc/ScrollableContent';

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

  const handleLoginClick = async e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      // TODO: ERROR MSG
      return;
    }
    if (password.length < 2) {
      // TODO: ERROR MSG
      return;
    }
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

  const navigateBack = () => history.goBack();

  return (
    <PageContainer>
      <Toolbar
        title={t(D.LOGIN.title)}
        leftIcon="back"
        onLeftIconClick={navigateBack}
      />
      <ScrollableContent>
        <section className={styles.logoContainer}>
          <Icons.peili className={styles.logo} />
          <h1>Peili</h1>
        </section>
        <form className={styles.formSection}>
          <TextInput
            type="email"
            value={email}
            label={emailLabel}
            onChange={handleEmailChange}
            placeholder={emailPlaceholder}
            errorMessage={emailError}
          />
          <TextInput
            type="password"
            value={password}
            label={passwordLabel}
            style={{ marginTop: '16px' }}
            onChange={handlePasswordChange}
            placeholder="••••••••"
            errorMessage={passwordError}
          />
          <Button
            label={loginLabel}
            style={{ margin: '32px 0 64px' }}
            onClick={handleLoginClick}
            type={'submit'}
          />
        </form>
      </ScrollableContent>
    </PageContainer>
  );
};

export default LoginPage;
