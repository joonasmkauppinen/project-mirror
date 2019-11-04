import React from 'react';
import styles from './LandingPage.module.scss';
import Button from '../../components/Button';
// import T from '../../utils/translations';
// import { t } from '../../utils/translate';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();
  const handleOnLoginClick = () => history.push('/login');
  const handleOnSignupClick = () =>
    console.warn('TODO: navigate to signup page.');
  return (
    <>
      <section className={styles.heroSection}>
        <h1>Peili</h1>
        <p>Löydä vahvuutesi tekoälyllä.</p>
        <Button
          primary
          label="Luo käyttäjä"
          superClass={styles.signupButton}
          onClick={handleOnSignupClick}
        />
        <Button secondary label="Kirjaudu" onClick={handleOnLoginClick} />
      </section>
    </>
  );
};

export default LandingPage;
