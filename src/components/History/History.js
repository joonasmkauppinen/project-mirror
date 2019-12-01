import React from 'react';
import styles from './History.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Subheader from '../Subheader';
import Icons from '../../assets/Icons';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';
import Task from '../Task';
import moment from 'moment';

// eslint-disable-next-line no-unused-vars
const History = ({ history, loading, error }) => {
  return (
    <>
      <div className={styles.historyContainer}>
        <Subheader>{t(D.PROFILE.history)}</Subheader>
        <LoadingIndicator loading={false} error={error}>
          {history.map((item, index) => {
            let element = <></>;

            switch (item.type) {
              case 'trophy':
                element = (
                  <Trophy title={item.title} subtitle={item.subtitle} />
                );
                break;
              case 'task':
                element = (
                  <Task
                    points={item.xp}
                    title={item.title}
                    description={item.subtitle}
                    onClick={() => console.log('Öpen task result screen')}
                    completed
                  />
                );
                break;
              case 'level':
                element = (
                  <Level title={item.title} description={item.description} />
                );
                break;
              case 'born':
                element = (
                  <Level description={item.description} title={item.title} />
                );
                break;
              default:
                break;
            }
            return (
              <div key={item.u_time}>
                {index !== 0 && <div className={styles.verticalLine} />}
                <div className={styles.historyItem}>{element}</div>
                {index !== history.length && (
                  <>
                    <div className={styles.smallVerticalLine} />
                    <div className={styles.date}>
                      {moment(item.time).format('DD.MM.YYYY')}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </LoadingIndicator>
      </div>
    </>
  );
};

History.propTypes = {
  history: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const Level = ({ title, description }) => {
  return (
    <div className={styles.level}>
      <Icons.levelUp />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.teaser}>{description}</div>
      </div>
    </div>
  );
};

Level.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const Trophy = ({ title, subtitle }) => {
  // TODO: Add onClick that opens image in dialog component
  return (
    <div className={styles.trophy}>
      <Icons.trophy />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.teaser}>{subtitle}</div>
      </div>
    </div>
  );
};

Trophy.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default History;
