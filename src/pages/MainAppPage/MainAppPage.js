import React from 'react';
import styles from '../PageContainer.module.scss';
import { Route, Switch, useRouteMatch } from 'react-router';
import HomeTab from './HomeTab';
import DiscoverTab from './DiscoverTab';
import ChatTab from './ChatTab';
import ProfileTab from './ProfileTab';
import BottomNavigationBar from '../../components/BottomNavigationBar';

const MainAppPage = () => {
  const match = useRouteMatch();
  if (!match) {
    return <div>Error</div>;
  }
  return (
    <div>
      <div className={styles.tabContainer}>
        {/*<div className={styles.subContainer}>
          <Toolbar title="" info="true" />
  </div>*/}
        <div className={styles.subContainer}>
          <BottomNavigationBar className={styles.bottom} />
          <div className={styles.content}>
            <Switch>
              <Route exact path={`${match.url}`} component={HomeTab} />
              <Route path={`${match.url}/discover`} component={DiscoverTab} />
              <Route path={`${match.url}/chat`} component={ChatTab} />
              <Route path={`${match.url}/profile`} component={ProfileTab} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAppPage;
