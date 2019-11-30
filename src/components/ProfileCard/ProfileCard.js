import React from 'react';
import styles from './ProfileCard.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Card from '../Card';
import Icons from '../../assets/Icons';
import Gauges from '../Gauges';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import { isEmpty } from 'lodash-es';

// eslint-disable-next-line no-unused-vars
const ProfileCard = ({ user, loading, error, gauges }) => {
  return (
    <>
      <LoadingIndicator loading={false} error={error}>
        <Card>
          <div className={styles.cardContent}>
            <div className={styles.profileHeader}>
              <Icons.avatar />
              <div className={styles.username}>
                {user.firstname} {user.surname}
              </div>
            </div>
            <div className={styles.levelsContainer}>
              <div className={styles.level}>
                {t(D.PROFILE.points)} {!isEmpty(user) && user.gamification.xp}
              </div>
              <div className={styles.level}>
                {t(D.PROFILE.level)} {!isEmpty(user) && user.gamification.level}
              </div>
            </div>
            <div className={styles.gaugesContainer}>
              {gauges.map(
                gauge =>
                  gauge.id /* TODO: Remove id check */ && (
                    <div key={gauge.id}>
                      <Gauges percentage={gauge.value} title={gauge.name} />
                    </div>
                  ),
              )}
            </div>
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
  gauges: PropTypes.array,
};

export default ProfileCard;
