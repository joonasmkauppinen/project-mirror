import React from 'react';
import styles from '../PageContainer.module.scss';
import { useRouteMatch, useLocation } from 'react-router';
import HomeTab from './HomeTab';
import DiscoverTab from './DiscoverTab';
import ChatTab from './ChatTab';
import ProfileTab from './ProfileTab';
import BottomNavigationBar from '../../components/BottomNavigationBar';

const hidePage = (url, match, loc) => {
  return loc.pathname !== `${match.url}${url}`;
};

const MainAppPage = () => {
  const match = useRouteMatch();
  const loc = useLocation();
  return (
    <div>
      <div className={styles.tabContainer}>
        {/*<div className={styles.subContainer}>
          <Toolbar title="" info="true" />
  </div>*/}
        <div className={styles.content}>
          <div className={hidePage('', match, loc) ? styles.hidden : ''}>
            <HomeTab />
          </div>
          <div
            className={hidePage('/discover', match, loc) ? styles.hidden : ''}
          >
            <DiscoverTab />
          </div>
          <div className={hidePage('/chat', match, loc) ? styles.hidden : ''}>
            <ChatTab />
          </div>
          <div
            className={hidePage('/profile', match, loc) ? styles.hidden : ''}
          >
            <ProfileTab />
          </div>
        </div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default MainAppPage;
