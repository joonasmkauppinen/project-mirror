import React from 'react';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();
  const handleOnLoginClick = () => history.push('/login');
  return (
    <>
      <section className={styles.heroSection}>
        <h1>Peili</h1>
        <p>Löydä vahvuutesi tekoälyllä.</p>
        <button>Luo käyttäjä</button>
        <button onClick={handleOnLoginClick}>Kirjaudu sisään</button>
      </section>
    </>
  );
};

export default LandingPage;
