import React, { FunctionComponent } from 'react';
import styles from './BottomNavigationBar.module.css';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as DiscoverIcon } from '../../assets/discover.svg';
import { ReactComponent as ChatIcon } from '../../assets/chat.svg';
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const BottomNavigationBar: React.FC = () => {
  return (
    <div className={styles.bottomNavigationBar}>
      <ButtonLink label="Home" to="">
        <HomeIcon />
      </ButtonLink>
      <ButtonLink label="Discover" to="/discover">
        <DiscoverIcon />
      </ButtonLink>
      <ButtonLink label="Chat" to="/chat">
        <ChatIcon />
      </ButtonLink>
      <ButtonLink label="Profile" to="/profile">
        <ProfileIcon />
      </ButtonLink>
    </div>
  );
};

type LinkProps = {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
  children: PropTypes.ReactNodeLike;
};

const ButtonLink: FunctionComponent<LinkProps> = ({
  label,
  to,
  children,
}: LinkProps) => {
  const match = useRouteMatch();
  if (!match) {
    return <div>Error</div>;
  }
  return (
    <NavLink
      exact={true}
      activeClassName={styles.active}
      to={`${match.url}${to}`}
    >
      <button>
        {children}
        <p>{label}</p>
      </button>
    </NavLink>
  );
};

export default BottomNavigationBar;
