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
import ScrollableContent from '../../hoc/ScrollableContent';
import Dialog from '../../components/Dialog';
import Text from '../../components/Text';

const SettingsPage = () => {
  const history = useHistory();
  const handleOnBackClick = () => history.goBack();
  const [notifValue, setNotifValue] = useState(false);
  const [locValue, setLocValue] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
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
    logout().then(response => {
      if (response.success) {
        history.replace('/');
      }
    });
  };
  return (
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={t(D.SETTINGS.title)}
      />
      <ScrollableContent>
        <div className={styles.settingsPageContent}>
          <div className={styles.settingsItem}>
            <div className={styles.otherIcon}>
              <Icons.notification />
            </div>
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
            <div className={styles.otherIcon}>
              <Icons.location />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                {t(D.SETTINGS.location.header)}
              </div>
              <div className={styles.title}>{t(D.SETTINGS.location.title)}</div>
              <div className={styles.body}>{t(D.SETTINGS.location.body)}</div>
            </div>
            <Toggle
              isOn={locValue}
              handleToggle={() => setLocValue(!locValue)}
            />
          </div>
          <Dialog
            header={t(D.SETTINGS.logout)}
            visible={showDialog}
            onOutsideClick={() => setShowDialog(false)}
            positiveLabel={t(D.SETTINGS.logout)}
            negativeLabel={t(D.SETTINGS.cancel)}
            onPositiveClicked={handleLogoutClick}
            onNegativeClicked={() => setShowDialog(false)}
          >
            <Text>{t(D.SETTINGS.confirm)}</Text>
          </Dialog>
          <div className={styles.horizontalLine} />
          <div className={styles.settingsItem}>
            <div className={styles.languageIcon}>
              <Icons.language />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>Localization</div>
              <div className={styles.title}>System Language</div>
              <div className={styles.body}>Change your OS language.</div>
              <div className={styles.body + ' ' + styles.actions}>
                <Button
                  onClick={() => changeLanguage('en')}
                  secondary
                  label="English"
                  disabled={language === 'en'}
                  style={{ marginRight: '4px' }}
                />
                <Button
                  onClick={() => changeLanguage('fi')}
                  secondary
                  label="Suomi"
                  disabled={language === 'fi'}
                  style={{ marginLeft: '4px' }}
                />
              </div>
            </div>
          </div>
          <br />
          <Button
            onClick={() => setShowDialog(true)}
            secondary
            label={t(D.logout)}
          />
          <br />
          <br />
        </div>
      </ScrollableContent>
    </PageContainer>
  );
};

export default SettingsPage;
