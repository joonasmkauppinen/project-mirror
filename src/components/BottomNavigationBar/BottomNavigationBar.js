import React from 'react';
import styles from './BottomNavigationBar.module.scss';
import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg';
import { ReactComponent as HomeIconActive } from '../../assets/svg/home-filled.svg';
import { ReactComponent as DiscoverIcon } from '../../assets/svg/discover.svg';
import { ReactComponent as DiscoverIconActive } from '../../assets/svg/discover-filled.svg';
import { ReactComponent as ChatIcon } from '../../assets/svg/chat.svg';
import { ReactComponent as ChatIconActive } from '../../assets/svg/chat-filled.svg';
import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg';
import { ReactComponent as ProfileIconActive } from '../../assets/svg/profile-filled.svg';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { t } from '../../utils/translate';

const BottomNavigationBar = () => {
  return (
    <div className={styles.bottomNavigationBar}>
      <ButtonLink label={t('TABS.home')} to="/main">
        {!useRouteMatch({ path: '/main', exact: true }) ? (
          <HomeIcon />
        ) : (
          <HomeIconActive />
        )}
      </ButtonLink>
      <ButtonLink label={t('TABS.discover')} to="/main/discover">
        {!useRouteMatch('/main/discover') ? (
          <DiscoverIcon />
        ) : (
          <DiscoverIconActive />
        )}
      </ButtonLink>
      <ButtonLink label={t('TABS.chat')} to="/main/chat">
        {!useRouteMatch('/main/chat') ? <ChatIcon /> : <ChatIconActive />}
      </ButtonLink>
      <ButtonLink label={t('TABS.profile')} to="/main/profile">
        {!useRouteMatch('/main/profile') ? (
          <ProfileIcon />
        ) : (
          <ProfileIconActive />
        )}
      </ButtonLink>
    </div>
  );
};

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

export default BottomNavigationBar;
