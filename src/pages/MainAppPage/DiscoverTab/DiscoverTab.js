import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TabContainer from '../../../hoc/TabContainer';
import TabTitle from '../../../components/TabTitle';
import Header from '../../../components/Header';
import { t } from '../../../utils/translate';
import OrgsList from '../../../components/OrgsList';
import EventList from '../../../components/EventList';

const DiscoverTab = ({ visible, loadOrgs, loadEvents, events }) => {
  useEffect(() => {
    if (visible) {
      loadOrgs();
      loadEvents();
    }
  }, [loadOrgs, loadEvents, visible]);
  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t('TABS.discover')}</Header>
      </TabTitle>
      <OrgsList />
      <EventList events={events} />
    </TabContainer>
  );
};

DiscoverTab.propTypes = {
  visible: PropTypes.bool,
  loadOrgs: PropTypes.func,
  loadEvents: PropTypes.func,
  events: PropTypes.array,
};

export default DiscoverTab;
