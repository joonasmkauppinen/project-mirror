import React, { FunctionComponent } from 'react';
import styles from './BottomNavigationBar.module.css';
import { ReactComponent as HomeIcon } from '../../assets/outlined/home.svg';
import { ReactComponent as HomeIconActive } from '../../assets/filled/home-filled.svg';
import { ReactComponent as DiscoverIcon } from '../../assets/outlined/discover.svg';
import { ReactComponent as DiscoverIconActive } from '../../assets/filled/discover-filled.svg';
import { ReactComponent as ChatIcon } from '../../assets/outlined/chat.svg';
import { ReactComponent as ChatIconActive } from '../../assets/filled/chat-filled.svg';
import { ReactComponent as ProfileIcon } from '../../assets/outlined/profile.svg';
import { ReactComponent as ProfileIconActive } from '../../assets/filled/profile-filled.svg';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const BottomNavigationBar: React.FC = () => {
  return (
    <div className={styles.bottomNavigationBar}>
      <ButtonLink label="Home" to="/main">
        {!useRouteMatch({ path: '/main', exact: true }) ? (
          <HomeIcon />
        ) : (
          <HomeIconActive />
        )}
      </ButtonLink>
      <ButtonLink label="Discover" to="/main/discover">
        {!useRouteMatch('/main/discover') ? (
          <DiscoverIcon />
        ) : (
          <DiscoverIconActive />
        )}
      </ButtonLink>
      <ButtonLink label="Chat" to="/main/chat">
        {!useRouteMatch('/main/chat') ? <ChatIcon /> : <ChatIconActive />}
      </ButtonLink>
      <ButtonLink label="Profile" to="/main/profile">
        {!useRouteMatch('/main/profile') ? (
          <ProfileIcon />
        ) : (
          <ProfileIconActive />
        )}
      </ButtonLink>
    </div>
  );
};

type LinkProps = {
  label: string;
  to: string;
  children: PropTypes.ReactNodeLike;
};

const ButtonLink: FunctionComponent<LinkProps> = ({
  label,
  to,
  children,
}: LinkProps) => {
  return (
    <NavLink exact={true} activeClassName={styles.active} to={to}>
      <button>
        {children}
        <p>{label}</p>
      </button>
    </NavLink>
  );
};

export default BottomNavigationBar;
