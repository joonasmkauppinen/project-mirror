import React from 'react';
import styles from '../PageContainer.module.css';
import Header from '../../components/Header';
import Text from '../../components/Text';

const LandingPage: React.FC = (): JSX.Element => (
  <div className={styles.container}>
    <Header>Landing page</Header>
    <Text>This will be the landing page.</Text>
  </div>
);

export default LandingPage;
