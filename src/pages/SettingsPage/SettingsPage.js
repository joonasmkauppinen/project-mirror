import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SettingsPage.module.scss';
import Icons from '../../assets/Icons';
import Toolbar from '../../components/Toolbar';
import { language, t } from '../../utils/translate';
import D from '../../utils/dictionary';
import { setCookie } from '../../utils/cookies';
import { apiCall, logout } from '../../utils/apicall';
import Button from '../../components/Button';
import PageContainer from '../../hoc/PageContainer';
import Toggle from '../../components/Toggle';

const SettingsPage = () => {
  const history = useHistory();
  const handleOnBackClick = () => history.goBack();
  const [notifValue, setNotifValue] = useState(false);
  const [locValue, setLocValue] = useState(false);
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
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={t(D.SETTINGS.title)}
      />
      <div className={styles.settingsPageContent}>
        <div className={styles.settingsItem}>
          <Icons.notification />
          <div className={styles.textContainer}>
            <div className={styles.header}>{t(D.SETTINGS.notif.header)}</div>
            <div className={styles.title}>{t(D.SETTINGS.notif.title)}</div>
            <div className={styles.body}>{t(D.SETTINGS.notif.body)}</div>
          </div>
          <Toggle
            isOn={notifValue}
            handleToggle={() => setNotifValue(!notifValue)}
          />
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.settingsItem}>
          <Icons.location />
          <div className={styles.textContainer}>
            <div className={styles.header}>{t(D.SETTINGS.location.header)}</div>
            <div className={styles.title}>{t(D.SETTINGS.location.title)}</div>
            <div className={styles.body}>{t(D.SETTINGS.location.body)}</div>
          </div>
          <Toggle isOn={locValue} handleToggle={() => setLocValue(!locValue)} />
        </div>
        <Button onClick={handleLogoutClick} secondary label={t(D.logout)} />
        <Button
          onClick={() => changeLanguage('en')}
          secondary
          label="lang -> en"
          disabled={language === 'en'}
        />
        <Button
          onClick={() => changeLanguage('fi')}
          secondary
          label="lang -> fi"
          disabled={language === 'fi'}
        />
      </div>
    </PageContainer>
  );
};

export default SettingsPage;
