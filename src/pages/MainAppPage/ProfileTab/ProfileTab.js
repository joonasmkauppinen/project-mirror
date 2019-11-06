import React from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.scss';
import { useHistory } from 'react-router-dom';
import { t } from '../../../utils/translate';
import { logout } from '../../../utils/apicall';
import Button from '../../../components/Button';

const ProfileTab = () => {
  const history = useHistory();
  const handleLogoutClick = () => {
    if (window.confirm(t('LOGOUT.confirm'))) {
      logout().then(response => {
        if (response.success) {
          history.replace('/');
        }
      });
    }
  };
  return (
    <div className={styles.container}>
      <Header>{t('PROFILE.title')}</Header>
      <Text>{t('PROFILE.teaser')}</Text>
      <div style={{ flex: 1, width: '100%' }}>
        <Button
          onClick={handleLogoutClick}
          secondary
          label={t('logout')}
          style={{ margin: 'auto' }}
        />
      </div>
    </div>
  );
};

export default ProfileTab;
