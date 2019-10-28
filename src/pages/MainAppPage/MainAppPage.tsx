import React, { FC } from 'react';
import styles from '../PageContainer.module.css';
import { Route, Switch, useRouteMatch } from 'react-router';
import HomeTab from '../HomeTab';
import DiscoverTab from '../DiscoverTab';
import ChatTab from '../ChatTab';
import ProfileTab from '../ProfileTab';
import { Link } from 'react-router-dom';

const MainAppPage: FC = () => {
  const match = useRouteMatch();
  if (!match) {
    return <div>Error</div>;
  }
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/home`}>Home</Link>
          </li>
          <li>
            <Link to={`${match.url}/discover`}>Discover</Link>
          </li>
          <li>
            <Link to={`${match.url}/chat`}>Chat</Link>
          </li>
          <li>
            <Link to={`${match.url}/profile`}>Profile</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${match.path}/home`}>
          <HomeTab />
        </Route>
        <Route path={`${match.url}/discover`}>
          <DiscoverTab />
        </Route>
        <Route path={`${match.url}/chat`}>
          <ChatTab />
        </Route>
        <Route path={`${match.url}/profile`}>
          <ProfileTab />
        </Route>
      </Switch>
    </div>
  );
};

export default MainAppPage;
