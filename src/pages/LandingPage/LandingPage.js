import React from 'react';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import { useHistory } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from '../../config/particles-config';

import { ReactComponent as PeiliLogo } from '../../assets/svg/peili-official-logo-outline_ic.svg';
import { ReactComponent as ScrollIndicator } from '../../assets/svg/scroll-indicator.svg';
import styles from './LandingPage.module.scss';
import Button from '../../components/Button';

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
        <Particles
          canvasClassName={styles.particles}
          params={particlesConfig}
        />
        <div className={styles.logoContainer}>
          <PeiliLogo className={styles.logo} />
          <h1 className={styles.appName}>Peili</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttonContainer}>
          <p className={styles.hint}>{hint}</p>
          <Button
            primary
            label={signupLabel}
            superClass={styles.signupButton}
            onClick={handleOnSignupClick}
          />
          <Button secondary label={loginLabel} onClick={handleOnLoginClick} />
          <span className={styles.scrollIndicatorContainer}>
            <ScrollIndicator className={styles.scrollIndicator} />
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
    </>
  );
};

export default LandingPage;
