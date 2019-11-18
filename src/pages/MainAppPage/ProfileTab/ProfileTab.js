import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import { useHistory } from 'react-router-dom';
import { t } from '../../../utils/translate';
import { logout } from '../../../utils/apicall';
import Button from '../../../components/Button';
import { setCookie } from '../../../utils/cookies';
import { apiCall } from '../../../utils/apicall';
import { language } from '../../../utils/translate';
import TabContainer from '../../../hoc/TabContainer';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';
import Gauges from '../../../components/Gauges';
import Card from '../../../components/Card';
import styles from './ProfileTab.module.css';

const ProfileTab = ({ visible }) => {
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
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t('TABS.profile')}</Header>
        <IconButton icon={'settings'} onClick={() => {}} />
      </TabTitle>
      <Card superClass={styles.card}>
        <Gauges />
      </Card>
      <Button onClick={handleLogoutClick} secondary label={t('logout')} />
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
    </TabContainer>
  );
};

ProfileTab.propTypes = {
  visible: PropTypes.bool,
};

export default ProfileTab;
