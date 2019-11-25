import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OrgDetailPage.module.scss';
import Toolbar from '../../components/Toolbar';
import PageContainer from '../../hoc/PageContainer';
import Subheader from '../../components/Subheader';
import EventList from '../../components/EventList';
import ScrollableContent from '../../hoc/ScrollableContent';

const OrgDetailPage = ({ loadEvents, events }) => {
  const history = useHistory();
  const location = useLocation();
  const handleOnBackClick = () => history.goBack();
  const org = location.state;
  const orgEvents = events.filter(event => event.organization_id === org.id);

  useEffect(() => {
    loadEvents(org.id);
  }, [loadEvents, org.id]);

  return (
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={org.name}
      />
      <ScrollableContent>
        {org.image && (
          <img src={org.image} alt="organization" className={styles.orgImage} />
        )}
        <div className={styles.orgPageContent}>
          <Subheader>Telephone: {org.tel}</Subheader>
          <Subheader>
            <a href={org.www}>Link</a>
          </Subheader>
          <EventList events={orgEvents} />
        </div>
      </ScrollableContent>
    </PageContainer>
  );
};

OrgDetailPage.propTypes = {
  loadEvents: PropTypes.func,
  events: PropTypes.array,
};

export default OrgDetailPage;
