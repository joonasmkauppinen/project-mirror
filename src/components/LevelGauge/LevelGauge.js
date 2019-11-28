import React from 'react';
import styles from './LevelGauge.module.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const LevelGauge = ({ user }) => {
  const xp = user.gamification.xp;
  const level = user.gamification.level;
  const startXp = (level - 1) * 25;
  const endXp = level * 25;
  const endLevel = level + 1;
  const startLevel = level;
  const progress = Math.round(((xp - startXp) / (endXp - startXp)) * 100);
  return (
    <div className={styles.levelContainer}>
      <div>
        <div className={styles.levelLabel} style={{ float: 'left' }}>
          <div>{startLevel}</div>
          <div className={styles.pipe} />
        </div>
        <div className={styles.levelLabel} style={{ float: 'right' }}>
          <div>{endLevel}</div>
          <div className={styles.pipe} />
        </div>
      </div>
      <div className={styles.levelBar}>
        <div className={styles.level}>
          <hr className={styles.startLine} />
          {progress > 20 && <div className={styles.startLevel}>{startXp}</div>}
          <div className={styles.filler} style={{ width: `${progress}%` }}>
            <div className={styles.levelValue}>{xp}</div>
          </div>
          {progress < 90 && <div className={styles.endLevel}>{endXp}</div>}
          <hr className={styles.endLine} />
        </div>
      </div>
    </div>
  );
};

LevelGauge.propTypes = {
  user: PropTypes.object,
};

export default LevelGauge;
