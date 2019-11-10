import React, { useRef, useEffect } from 'react';
import styles from './BottomNavigationBar.module.scss';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import { t } from '../../utils/translate';
import Icons from '../../assets/Icons';
import PropTypes from 'prop-types';

const BottomNavigationBar = () => {
  const bottomNav = useRef(null);
  useEffect(() => {
    bottomNav.current.addEventListener('touchmove', e => {
      e.preventDefault();
    });
  }, []);
  return (
    <div className={styles.bottomNavigationBar} ref={bottomNav}>
      <ButtonLink label={t('TABS.home')} to="/main">
        {!useRouteMatch({ path: '/main', exact: true }) ? (
          <Icons.home />
        ) : (
          <Icons.homeFilled />
        )}
      </ButtonLink>
      <ButtonLink label={t('TABS.discover')} to="/main/discover">
        {!useRouteMatch('/main/discover') ? (
          <Icons.discover />
        ) : (
          <Icons.discoverFilled />
        )}
      </ButtonLink>
      <ButtonLink label={t('TABS.chat')} to="/main/chat">
        {!useRouteMatch('/main/chat') ? <Icons.chat /> : <Icons.chatFilled />}
      </ButtonLink>
      <ButtonLink label={t('TABS.profile')} to="/main/profile">
        {!useRouteMatch('/main/profile') ? (
          <Icons.profile />
        ) : (
          <Icons.profileFilled />
        )}
      </ButtonLink>
    </div>
  );
};

const ButtonLink = ({ label, to, children }) => {
  const location = useLocation();
  const history = useHistory();
  const classes = [styles.link];
  location.pathname === to && classes.push(styles.active);
  return (
    <div className={classes.join(' ')} onClick={() => history.replace(to)}>
      {children}
      <p>{label}</p>
    </div>
  );
};

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BottomNavigationBar;
