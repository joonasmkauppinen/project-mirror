import React from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.scss';

import { t } from '../../../utils/translate';
import { logout } from '../../../utils/apicall';
import Button from '../../../components/Button';

const logoutButtonClick = () => {
  if (window.confirm(t('LOGOUT.confirm'))) {
    logout().then(response => {
      if (response.success) {
        window.location.reload(true);
      }
    });
  }
};

const ProfileTab = () => (
  <div className={styles.container}>
    <Header>{t('PROFILE.title')}</Header>
    <Text>{t('PROFILE.teaser')}</Text>
    <div style={{ flex: 1, width: '100%' }}>
      <Button
        handleClick={logoutButtonClick}
        secondary
        label={t('logout')}
        style={{ margin: 'auto' }}
      />
    </div>
  </div>
);

export default ProfileTab;
