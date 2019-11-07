import React from 'react';
import { useHistory } from 'react-router-dom';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';

import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';

const SignupPage = () => {
  const history = useHistory();
  const title = t(D.SIGNUP.title);
  const handleLeftIconPress = () => history.goBack();
  return (
    <PageContainer>
      <Toolbar
        title={title}
        leftIcon="back"
        onLeftIconClick={handleLeftIconPress}
      />
      <div>dis will be signup page</div>
    </PageContainer>
  );
};

export default SignupPage;
