import React from 'react';
import { useLocation } from 'react-router';
import PageContainer from '../../hoc/PageContainer';
import HomeTab from './HomeTab';
import DiscoverTab from './DiscoverTab';
import ChatTab from './ChatTab';
import ProfileTab from './ProfileTab';
import BottomNavigationBar from '../../components/BottomNavigationBar';
import Toolbar from '../../components/Toolbar';

const MainAppPage = () => {
  const location = useLocation();

  const [currentTab] = location.pathname.split('/').reverse();
  const homeVisible = currentTab === 'main';
  const discoverVisible = currentTab === 'discover';
  const chatVisible = currentTab === 'chat';
  const profileVisible = currentTab === 'profile';

  return (
    <PageContainer>
      <Toolbar leftIcon="info" title="Test title" />
      <HomeTab visible={homeVisible} />
      <DiscoverTab visible={discoverVisible} />
      <ChatTab visible={chatVisible} />
      <ProfileTab visible={profileVisible} />
      <BottomNavigationBar />
    </PageContainer>
  );
};

export default MainAppPage;
