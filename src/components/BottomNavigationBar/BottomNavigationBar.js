import React from 'react';
import styles from './BottomNavigationBar.module.scss';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { t } from '../../utils/translate';
import Icons from '../../assets/Icons';
import PropTypes from 'prop-types';

const BottomNavigationBar = () => (
  <div className={styles.bottomNavigationBar}>
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

const ButtonLink = ({ label, to, children }) => {
  return (
    <NavLink
      exact={true}
      activeClassName={styles.active}
      to={to}
      replace={true}
    >
      <div>
        {children}
        <p>{label}</p>
      </div>
    </NavLink>
  );
};

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BottomNavigationBar;
