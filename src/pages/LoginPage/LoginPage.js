import React from 'react';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import { login } from '../../utils/apicall';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from './LoginPage.module.scss';
import PageContainer from '../../hoc/PageContainer';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Toolbar from '../../components/Toolbar';
import Icons from '../../assets/Icons';
import ScrollableContent from '../../hoc/ScrollableContent';

const LoginPage = () => {
  const history = useHistory();
  const title = t(D.LOGIN.title);
  const emailLabel = t(D.LOGIN.email_lable);
  const emailPlaceholder = t(D.LOGIN.email_placeholder);
  const passwordLabel = t(D.LOGIN.password_label);
  const loginLabel = t(D.LOGIN.login_btn);
  const invalidEmail = t(D.FORM_ERRORS.invalid_email);
  const requiredField = t(D.FORM_ERRORS.required_field);

  const navigateToMain = () => history.replace('/main');
  const navigateBack = () => history.goBack();

  const handleSubmit = async ({ username, password }) => {
    const { success, error } = await login(username, password);
    if (success) navigateToMain();
    else alert(error);
  };

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .email(invalidEmail)
      .required(requiredField),
    password: Yup.string().required(requiredField),
  });

  return (
    <PageContainer>
      <Toolbar title={title} leftIcon="back" onLeftIconClick={navigateBack} />
      <ScrollableContent>
        <section className={styles.logoContainer}>
          <Icons.peili className={styles.logo} />
          <h1>Peili</h1>
        </section>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
            <TextInput
              name="username"
              type="email"
              label={emailLabel}
              placeholder={emailPlaceholder}
            />
            <TextInput
              name="password"
              type="password"
              label={passwordLabel}
              placeholder={t(D.PLACEHOLDERS.password)}
              style={{ marginTop: '16px' }}
            />
            <Button
              type="submit"
              label={loginLabel}
              style={{ marginTop: '32px' }}
            />
          </Form>
        </Formik>
      </ScrollableContent>
    </PageContainer>
  );
};

export default LoginPage;
