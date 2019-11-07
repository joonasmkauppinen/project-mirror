import React from 'react';
import { useHistory } from 'react-router-dom';

import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';

const SignupPage = () => {
  const history = useHistory();
  const handleLeftIconPress = () => history.goBack();
  return (
    <PageContainer>
      <Toolbar leftIcon="back" onLeftIconClick={handleLeftIconPress} />
      <div>dis will be signup page</div>
    </PageContainer>
  );
};

export default SignupPage;
