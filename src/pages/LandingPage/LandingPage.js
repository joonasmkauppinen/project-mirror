import React from 'react';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import { useHistory } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../../config/particles-config';
import styles from './LandingPage.module.scss';
import Button from '../../components/Button';
import Icons from '../../assets/Icons';

const LandingPage = () => {
  const description = t(D.LANDING.hero_section_description);
  const hint = t(D.LANDING.hero_section_hint);
  const signupLabel = t(D.LANDING.singup_btn);
  const loginLabel = t(D.LANDING.login_btn);
  const history = useHistory();
  const handleOnLoginClick = () => history.push('/login');
  const handleOnSignupClick = () => history.push('/signup');
  return (
    <div>
      <section className={styles.heroSection}>
        <Particles
          width="100vw"
          height="100vh"
          canvasClassName={styles.particles}
          params={particlesConfig}
        />
        <div className={styles.logoContainer}>
          <Icons.peili className={styles.logo} />
          <h1 className={styles.appName}>Peili</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttonContainer}>
          <p className={styles.hint}>{hint}</p>
          <Button
            label={signupLabel}
            onClick={handleOnSignupClick}
            superClass={styles.signupButton}
          />
          <Button secondary label={loginLabel} onClick={handleOnLoginClick} />
          <span className={styles.scrollIndicatorContainer}>
            <Icons.scroll className={styles.scrollIndicator} />
          </span>
        </div>
      </section>
      <section className={styles.featuresSection}>
        <div className={styles.feature}>
          <h1>{t(D.LANDING.peili_idea_header)}</h1>
          <p>{t(D.LANDING.peili_idea)}</p>
        </div>
        <div className={styles.feature}>
          <h1>{t(D.LANDING.peili_organizations_header)}</h1>
          <p>{t(D.LANDING.peili_organizations)}</p>
        </div>
        <div className={styles.feature}>
          <h1>{t(D.LANDING.peili_events_header)}</h1>
          <p>{t(D.LANDING.peili_events)}</p>
        </div>
        <div className={styles.feature}>
          <h1>{t(D.LANDING.peili_chat_header)}</h1>
          <p>{t(D.LANDING.peili_chat)}</p>
        </div>
      </section>
      <section className={styles.signupSection}>
        <h1>{t(D.LANDING.peili_signup_header)}</h1>
        <Button label={signupLabel} onClick={handleOnSignupClick} />
      </section>
      <footer className={styles.footerSection}>
        <h1>Project Mirror</h1>
        <p>Copyright © 2019 Alphat FIN, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
