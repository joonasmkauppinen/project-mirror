import React, { useEffect } from 'react';
import styles from './ProfileCard.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Card from '../Card';
import Icons from '../../assets/Icons';
import Gauges from '../Gauges';

const ProfileCard = ({ user, loading, error, loadUser }) => {
  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [loadUser]);
  return (
    <>
      <LoadingIndicator loading={loading} error={error}>
        <Card>
          <div className={styles.cardContent}>
            <div className={styles.profileHeader}>
              <Icons.avatar />
              <div className={styles.username}>
                {user.firstname} {user.surname}
              </div>
            </div>
            <Gauges />
          </div>
        </Card>
      </LoadingIndicator>
    </>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
  loadUser: PropTypes.func,
};

export default ProfileCard;
