import React from 'react';
import styles from './EventList.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Subheader from '../Subheader';
import Card from '../Card';
import Icons from '../../assets/Icons';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const EventList = ({ events, loading, error }) => {
  const history = useHistory();
  const handleEventClick = event => {
    history.push({
      pathname: `/events/${event.id}`,
      state: event,
    });
  };
  return (
    <>
      <Subheader>{t(D.DISCOVER.events)}</Subheader>
      <LoadingIndicator loading={false} error={error}>
        <div className={styles.eventsContainer}>
          {events.map(event => (
            <div
              key={event.id}
              className={styles.event}
              onClick={() => {
                handleEventClick(event);
              }}
            >
              <Card>
                {event.image ? (
                  <img
                    className={styles.eventImage}
                    src={event.image}
                    alt="event"
                  />
                ) : (
                  <img
                    className={styles.eventImage}
                    src={
                      'https://cdn.discordapp.com/attachments/638315718206816257/646754696496939031/asia_kunnossa.jpg'
                    }
                    alt="asia kunnossa"
                  />
                )}
                <div className={styles.eventContent}>
                  <div className={styles.eventTitle}>{event.title}</div>
                  <div className={styles.eventText}>{event.teaser}</div>
                  <div className={styles.eventText}>
                    <Icons.locationPinFilled />
                    {event.location}
                  </div>
                  <div className={styles.dateContainer}>
                    <div className={styles.day}>
                      {moment(event.start_time).format('dddd')}
                    </div>
                    <div className={styles.date}>
                      <div>{moment(event.start_time).format('MMM')}</div>
                      <div>{moment(event.start_time).date()}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </LoadingIndicator>
    </>
  );
};

EventList.propTypes = {
  events: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default EventList;
