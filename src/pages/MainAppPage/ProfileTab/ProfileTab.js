import React from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.scss';
import { useHistory } from 'react-router-dom';
import { t } from '../../../utils/translate';
import { logout } from '../../../utils/apicall';
import Button from '../../../components/Button';
import { setCookie } from '../../../utils/cookies';
import { apiCall } from '../../../utils/apicall';
import { language } from '../../../utils/translate';

const ProfileTab = () => {
  const history = useHistory();
  const changeLanguage = lang => {
    setCookie('site_language', lang);
    apiCall('set-language', { language: lang }).then(response => {
      if (response.success) {
        window.location.reload(true);
      } else {
        alert(response.error);
      }
    });
  };
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
        <Button
          onClick={() => changeLanguage('en')}
          secondary
          label="lang -> en"
          style={{ margin: 'auto' }}
          disabled={language === 'en'}
        />
        <Button
          onClick={() => changeLanguage('fi')}
          secondary
          label="lang -> fi"
          style={{ margin: 'auto' }}
          disabled={language === 'fi'}
        />
      </div>
    </div>
  );
};

export default ProfileTab;
