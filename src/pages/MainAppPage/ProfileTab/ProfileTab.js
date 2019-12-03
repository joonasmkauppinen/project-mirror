import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import { useHistory } from 'react-router-dom';
import { t } from '../../../utils/translate';
import TabContainer from '../../../hoc/TabContainer';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';
import ProfileCard from '../../../components/ProfileCard';
import History from '../../../components/History';

const ProfileTab = ({
  visible,
  user,
  loadUser,
  gauges,
  loadGauges,
  error,
  loading,
  loadHistory,
  userHistory,
}) => {
  const history = useHistory();
  useEffect(() => {
    if (visible) {
      loadUser();
      loadGauges();
      loadHistory();
    }
  }, [visible, loadGauges, loadUser, loadHistory]);
  const handleSettingsClick = () => history.push('/settings');
  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t('TABS.profile')}</Header>
        <IconButton
          icon={'settings'}
          onClick={handleSettingsClick}
          style={{ marginRight: '-16px' }}
        />
      </TabTitle>
      <div style={{ padding: '16px 0' }}>
        <ProfileCard
          user={user}
          gauges={gauges}
          error={error}
          loading={loading}
        />
      </div>
      <History history={userHistory} />
    </TabContainer>
  );
};

ProfileTab.propTypes = {
  visible: PropTypes.bool,
  user: PropTypes.object,
  loadUser: PropTypes.func,
  gauges: PropTypes.array,
  loadGauges: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
  loadHistory: PropTypes.func,
  userHistory: PropTypes.array,
};

export default ProfileTab;
