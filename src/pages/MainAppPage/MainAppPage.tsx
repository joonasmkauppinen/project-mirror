import React, { FC } from 'react';
import styles from '../PageContainer.module.css';
import { Route, Switch, useRouteMatch } from 'react-router';
import HomeTab from './HomeTab';
import DiscoverTab from './DiscoverTab';
import ChatTab from './ChatTab';
import ProfileTab from './ProfileTab';
import BottomNavigationBar from '../../components/BottomNavigationBar';

const MainAppPage: FC = () => {
  const match = useRouteMatch();
  if (!match) {
    return <div>Error</div>;
  }
  return (
    <div className={styles.container}>
      <BottomNavigationBar />
      <Switch>
        <Route path={`${match.url}/discover`}>
          <DiscoverTab />
        </Route>
        <Route path={`${match.url}/chat`}>
          <ChatTab />
        </Route>
        <Route path={`${match.url}/profile`}>
          <ProfileTab />
        </Route>
        <Route path={`${match.url}`}>
          <HomeTab />
        </Route>
      </Switch>
    </div>
  );
};

export default MainAppPage;
