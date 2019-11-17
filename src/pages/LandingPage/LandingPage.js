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
          <h1>Mikä Peili?</h1>
          <p>
            Tässä kerrotaan peilin tarkoitus ja tavoitteet lyhyesti ja
            ytimekkäästi. Mitä se sitten on, niin pitää kysyä tarkemmin
            asiakkaalta.
          </p>
        </div>
        <div className={styles.feature}>
          <h1>Löydä organisaatioita</h1>
          <p>
            Peili auttaa sinua löytämään organisaatioita jotka parhaiten
            auttavat sinua elämässä. (Asiakas taas osaa varmaan kertoa paremman
            kuvauksen...)
          </p>
        </div>
        <div className={styles.feature}>
          <h1>Tapahtumia</h1>
          <p>Coming soon...</p>
        </div>
        <div className={styles.feature}>
          <h1>Chat</h1>
          <p>
            Peilin kautta voit olla suoraan yhteydessä organisaatioiden
            yhteyshenkilöihin.
          </p>
        </div>
      </section>
      <section className={styles.signupSection}>
        <h1>Löydä vahvuutesi luomalla käyttäjä!</h1>
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
