import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import { useHistory } from 'react-router-dom';
import { t } from '../../../utils/translate';
import TabContainer from '../../../hoc/TabContainer';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';
import ProfileCard from '../../../components/ProfileCard';

const ProfileTab = ({ visible }) => {
  const history = useHistory();

  const handleSettingsClick = () => history.push('/settings');
  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t('TABS.profile')}</Header>
        <IconButton icon={'settings'} onClick={handleSettingsClick} />
      </TabTitle>
      <div style={{ padding: '16px 0' }}>
        <ProfileCard />
      </div>
    </TabContainer>
  );
};

ProfileTab.propTypes = {
  visible: PropTypes.bool,
};

export default ProfileTab;
