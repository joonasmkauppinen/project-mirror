import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OrgDetailPage.module.scss';
import Toolbar from '../../components/Toolbar';
import PageContainer from '../../hoc/PageContainer';
import EventList from '../../components/EventList';
import ScrollableContent from '../../hoc/ScrollableContent';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import Icons from '../../assets/Icons';
import Button from '../../components/Button';

const OrgDetailPage = ({ loadEvents, events, likeOrg }) => {
  const history = useHistory();
  const location = useLocation();
  const handleOnBackClick = () => history.goBack();
  const org = location.state;
  const orgEvents = events.filter(event => event.organization_id === org.id);
  let address,
    tel,
    website = null;
  if (org.address) {
    address = <div className={styles.body}>{org.address}</div>;
  }
  if (org.tel) {
    tel = <div className={styles.body}>{org.tel}</div>;
  }
  if (org.www) {
    website = (
      <a className={styles.link} href={org.www}>
        {t(D.ORG_DETAILS.website)}
      </a>
    );
  }

  const followOrg = () => {
    const following = org.following;
    likeOrg(org, following);
    org.following = !org.following;
  };

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
          <div className={styles.orgItem}>
            <div className={styles.orgTextContainer}>
              <div className={styles.header}>
                {t(D.ORG_DETAILS.description)}
              </div>
              <div className={styles.body + ' ' + styles.description}>
                {org.description}
              </div>
            </div>
          </div>
          <hr className={styles.divider} />
          {address && (
            <>
              <div className={styles.orgItem}>
                <Icons.locationPinFilled className={styles.filled} />
                <div className={styles.orgTextContainer + ' ' + styles.info}>
                  {address}
                </div>
              </div>
              <hr className={styles.divider} />
            </>
          )}
          {website && (
            <>
              <div className={styles.orgItem}>
                <Icons.language className={styles.filled} />
                <div className={styles.orgTextContainer + ' ' + styles.info}>
                  {website}
                </div>
              </div>
              <hr className={styles.divider} />
            </>
          )}
          {tel && (
            <>
              <div className={styles.orgItem}>
                <Icons.phone className={styles.outlined} />
                <div className={styles.orgTextContainer + ' ' + styles.info}>
                  {tel}
                </div>
              </div>
              <hr className={styles.divider} />
            </>
          )}
          <div className={styles.actions}>
            {org.following ? (
              <Button
                label={t(D.ORG_DETAILS.unfollow)}
                onClick={followOrg}
                secondary
              />
            ) : (
              <Button
                label={t(D.ORG_DETAILS.follow)}
                onClick={followOrg}
                secondary
              />
            )}
          </div>
          {orgEvents.length > 0 && <EventList events={orgEvents} />}
        </div>
      </ScrollableContent>
    </PageContainer>
  );
};

OrgDetailPage.propTypes = {
  loadEvents: PropTypes.func,
  events: PropTypes.array,
  likeOrg: PropTypes.func,
};

export default OrgDetailPage;
