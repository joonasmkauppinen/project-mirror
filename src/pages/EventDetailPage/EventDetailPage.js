import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EventDetailPage.module.scss';
import Toolbar from '../../components/Toolbar';
import PageContainer from '../../hoc/PageContainer';
import ScrollableContent from '../../hoc/ScrollableContent';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import Icons from '../../assets/Icons';
//import Task from '../../components/Task';
import moment from 'moment';

// eslint-disable-next-line no-unused-vars
const EventDetailPage = ({ loadEvents, events, likeOrg }) => {
  const history = useHistory();
  const location = useLocation();
  const handleOnBackClick = () => history.goBack();
  const event = location.state;
  let address,
    tel,
    website = null;
  if (event.location) {
    address = <div className={styles.body}>{event.location}</div>;
  }

  useEffect(() => {
    loadEvents(event.id);
  }, [loadEvents, event.id]);

  return (
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={event.title}
      />
      <ScrollableContent>
        {event.image && (
          <img
            src={event.image}
            alt="organization"
            className={styles.eventImage}
          />
        )}
        <div className={styles.eventPageContent}>
          <div className={styles.eventItem}>
            <div className={styles.eventTextContainer}>
              <div className={styles.header}>{t(D.EVENT_DETAILS.in_short)}</div>
              <div className={styles.body + ' ' + styles.description}>
                {event.teaser}
              </div>
            </div>
          </div>
          <div className={styles.eventItem}>
            <div className={styles.eventTextContainer}>
              <div className={styles.header}>
                {t(D.EVENT_DETAILS.date_when)}
              </div>
              <div className={styles.body + ' ' + styles.description}>
                {t(D.EVENT_DETAILS.starts)}:{' '}
                {moment(event.start_time).format('lll')}
                {event.end_time && (
                  <>
                    <br />
                    {t(D.EVENT_DETAILS.ends)}:{' '}
                    {moment(event.end_time).format('lll')}
                  </>
                )}
              </div>
            </div>
          </div>
          <hr className={styles.divider} />
          {address && (
            <>
              <div className={styles.eventItem}>
                <Icons.locationPinFilled className={styles.filled} />
                <div className={styles.eventTextContainer + ' ' + styles.info}>
                  {address}
                </div>
              </div>
              <hr className={styles.divider} />
            </>
          )}
          {website && (
            <>
              <div className={styles.eventItem}>
                <Icons.language className={styles.filled} />
                <div className={styles.eventTextContainer + ' ' + styles.info}>
                  {website}
                </div>
              </div>
              <hr className={styles.divider} />
            </>
          )}
          {tel && (
            <>
              <div className={styles.eventItem}>
                <Icons.phone className={styles.outlined} />
                <div className={styles.eventTextContainer + ' ' + styles.info}>
                  {tel}
                </div>
              </div>
              <hr className={styles.divider} />
            </>
          )}
          <div className={styles.eventItem}>
            <div className={styles.eventTextContainer}>
              <div className={styles.header}>
                {t(D.EVENT_DETAILS.arranged_by)}
              </div>
              <div className={styles.body + ' ' + styles.description}>
                {event.organization}
              </div>
            </div>
          </div>
          <div className={styles.eventItem}>
            <div className={styles.eventTextContainer}>
              <div className={styles.header}>
                {t(D.EVENT_DETAILS.full_description)}
              </div>
              <div className={styles.body + ' ' + styles.description}>
                {event.text}
              </div>
            </div>
          </div>
        </div>
      </ScrollableContent>
    </PageContainer>
  );
};

EventDetailPage.propTypes = {
  loadEvents: PropTypes.func,
  events: PropTypes.array,
  likeOrg: PropTypes.func,
};

export default EventDetailPage;
