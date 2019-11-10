import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';
import { apiCall, login } from '../../utils/apicall';

import styles from './SignupPage.module.scss';

import PageContainer from '../../hoc/PageContainer';
import ScrollableContent from '../../hoc/ScrollableContent';
import Toolbar from '../../components/Toolbar';
import TextInput from '../../components/TextInput';
import Icons from '../../assets/Icons';
import Button from '../../components/Button';

const SignupPage = () => {
  const history = useHistory();
  const title = t(D.SIGNUP.title);
  const [firstname, setFirstname] = useState('');
  // TODO: remove when validation is implemented
  // eslint-disable-next-line no-unused-vars
  const [firstnameError, setFirstnameError] = useState();
  const [email, setEmail] = useState('');
  // TODO: remove when validation is implemented
  // eslint-disable-next-line no-unused-vars
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState('');
  // TODO: remove when validation is implemented
  // eslint-disable-next-line no-unused-vars
  const [passwordError, setPasswordError] = useState();
  const [passwordAgain, setPasswordAgain] = useState('');
  // TODO: remove when validation is implemented
  // eslint-disable-next-line no-unused-vars
  const [passwordAgainError, setPasswordAgainError] = useState();
  const [surename, setSurename] = useState('');
  // TODO: remove when validation is implemented
  // eslint-disable-next-line no-unused-vars
  const [surenameError, setSurenameError] = useState();
  const [birthdate, setBirthdate] = useState('');
  // TODO: remove when validation is implemented
  // eslint-disable-next-line no-unused-vars
  const [birthdateError, setBirthdateError] = useState();
  const handleLeftIconPress = () => history.goBack();

  const handleEmailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleFirstnameChange = ({ target }) => {
    const { value } = target;
    setFirstname(value);
  };

  const handleSurenameChange = ({ target }) => {
    const { value } = target;
    setSurename(value);
  };

  const handleBirthdateChange = ({ target }) => {
    const { value } = target;
    setBirthdate(value);
  };

  const handlePasswordChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  const handlePasswordAgainChange = ({ target }) => {
    const { value } = target;
    setPasswordAgain(value);
  };

  const handleSignupClick = e => {
    e.preventDefault();
    // TODO: VALIDATIONS
    apiCall('register', {
      firstname: firstname,
      surename: surename,
      birthdate: birthdate,
      username: email,
      email: email,
      password: password,
    }).then(response => {
      if (response.success) {
        alert('TODO: SUCCEEDED !');
        login(email, password).then(res => {
          if (res.success) {
            // TODO: NAVIGATE TO HOME TAB
          } else {
            // TODO: LOGIN FAILED? SHOULD NOT FAIL...
          }
        });
      } else {
        alert(response.error);
      }
    });
  };

  return (
    <PageContainer>
      <Toolbar
        title={title}
        leftIcon="back"
        onLeftIconClick={handleLeftIconPress}
      />
      <ScrollableContent>
        <section className={styles.logoContainer}>
          <Icons.peili className={styles.logo} />
          <h1>Peili</h1>
          <p>{t(D.SIGNUP.teaser)}</p>
        </section>
        <form>
          <TextInput
            type="firstname"
            value={firstname}
            label={t(D.firstname)}
            onChange={handleFirstnameChange}
            placeholder={t(D.PLACEHOLDERS.firstname)}
            errorMessage={firstnameError}
          />
          <TextInput
            type="surename"
            value={surename}
            label={t(D.surename)}
            onChange={handleSurenameChange}
            placeholder={t(D.PLACEHOLDERS.surename)}
            errorMessage={surenameError}
            style={{ marginTop: '16px' }}
          />
          <TextInput
            type="date"
            value={birthdate}
            label={t(D.birthdate)}
            onChange={handleBirthdateChange}
            placeholder={t(D.PLACEHOLDERS.birthdate)}
            errorMessage={birthdateError}
            style={{ marginTop: '16px' }}
          />
          <TextInput
            type="email"
            value={email}
            label={t(D.email)}
            onChange={handleEmailChange}
            placeholder={t(D.PLACEHOLDERS.email)}
            errorMessage={emailError}
            style={{ marginTop: '32px' }}
          />
          <TextInput
            type="password"
            value={password}
            label={t(D.password)}
            onChange={handlePasswordChange}
            placeholder={t(D.PLACEHOLDERS.password)}
            errorMessage={passwordError}
            style={{ marginTop: '16px' }}
          />
          <TextInput
            type="password"
            value={passwordAgain}
            label={t(D.password_repeat)}
            onChange={handlePasswordAgainChange}
            placeholder={t(D.PLACEHOLDERS.password)}
            errorMessage={passwordAgainError}
            style={{ marginTop: '16px' }}
          />
          <Button
            label={t(D.SIGNUP.button_signup)}
            style={{ margin: '32px 0 64px' }}
            onClick={handleSignupClick}
            type={'submit'}
          />
        </form>
      </ScrollableContent>
    </PageContainer>
  );
};

export default SignupPage;
