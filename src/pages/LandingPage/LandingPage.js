import React from 'react';
import styles from './LandingPage.module.scss';
import Button from '../../components/Button';
import { t } from '../../utils/translate';
import D from '../../utils/disctionary';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const description = t(D.LANDING.hero_section_description);
  const hint = t(D.LANDING.hero_section_hint);
  const signupLabel = t(D.LANDING.singup_btn);
  const loginLabel = t(D.LANDING.login_btn);
  const history = useHistory();
  const handleOnLoginClick = () => history.push('/login');
  const handleOnSignupClick = () =>
    console.warn('TODO: navigate to signup page.');
  return (
    <>
      <section className={styles.heroSection}>
        <h1>Peili</h1>
        <p>{description}</p>
        <p>{hint}</p>
        <Button
          primary
          label={signupLabel}
          superClass={styles.signupButton}
          onClick={handleOnSignupClick}
        />
        <Button secondary label={loginLabel} onClick={handleOnLoginClick} />
      </section>
    </>
  );
};

export default LandingPage;
