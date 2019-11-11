import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import { useHistory } from 'react-router-dom';
import { t } from '../../../utils/translate';
import { logout } from '../../../utils/apicall';
import Button from '../../../components/Button';
import { setCookie } from '../../../utils/cookies';
import { apiCall } from '../../../utils/apicall';
import { language } from '../../../utils/translate';
import TabContainer from '../../../hoc/TabContainer';

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
      <Header>{t('TABS.profile')}</Header>
      <Text>{t('PROFILE.teaser')}</Text>
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
