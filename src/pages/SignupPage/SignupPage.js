import React from 'react';
import { useHistory } from 'react-router-dom';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';

import PageContainer from '../../hoc/PageContainer';
import ScrollableContent from '../../hoc/ScrollableContent';
import Toolbar from '../../components/Toolbar';
import Text from '../../components/Text';

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
      <ScrollableContent>
        <Text>dis will be signup page</Text>
      </ScrollableContent>
    </PageContainer>
  );
};

export default SignupPage;
