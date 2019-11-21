import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../components/Text';
import IconButton from '../../../components/IconButton';
import TabContainer from '../../../hoc/TabContainer';
import Toggle from '../../../components/Toggle';
import TabTitle from '../../../components/TabTitle';
import Header from '../../../components/Header';
import { t } from '../../../utils/translate';
import OrgsList from '../../../components/OrgsList';
import EventList from '../../../components/EventList';

const test = () => {
  console.log('Test');
};

const DiscoverTab = ({ visible, loadOrgs, loadEvents, events }) => {
  const [value, setValue] = useState(false);
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
        <IconButton icon={'search'} onClick={test} />
      </TabTitle>
      <OrgsList />
      <EventList events={events} />
      <Text>This is the discover tab</Text>
      <IconButton onClick={test} icon={'info'} />
      <Toggle isOn={value} handleToggle={() => setValue(!value)} />
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
