import React from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.scss';

import { logout } from '../../../utils/apicall';

const logoutButtonClick = () => {
  if (window.confirm('U wanna logout?')) {
    logout().then(response => {
      if (response.success) {
        window.location.reload(true);
      }
    });
  }
};

const ProfileTab = () => (
  <div className={styles.container}>
    <Header>Profile tab</Header>
    <Text>This is the profile tab</Text>
    <button onClick={logoutButtonClick}>Lågga Ut</button>
  </div>
);

export default ProfileTab;
