import React from 'react';
import { useHistory } from 'react-router-dom';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';
import { apiCall, login } from '../../utils/apicall';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from './SignupPage.module.scss';
import PageContainer from '../../hoc/PageContainer';
import ScrollableContent from '../../hoc/ScrollableContent';
import Toolbar from '../../components/Toolbar';
import TextInput from '../../components/TextInput';
import Icons from '../../assets/Icons';
import Button from '../../components/Button';

const SignupPage = () => {
  const history = useHistory();
  const title = t(D.SIGNUP.title);
  const handleLeftIconPress = () => history.goBack();
  const navigateToMain = () => history.replace('/main');

  const handleSubmit = async ({
    firstname,
    lastname,
    email,
    password,
    birthdate,
  }) => {
    const { success, error } = await apiCall('register', {
      firstname: firstname,
      surname: lastname,
      birthdate: birthdate,
      username: email,
      email: email,
      password: password,
    });
    if (success) {
      const { success, error } = await login(email, password);
      if (success) navigateToMain();
      if (error) alert(error);
    } else if (error) alert(error);
  };

  const initialValues = {
    firstname: '',
    lastname: '',
    birthdate: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const requiredField = t(D.FORM_ERRORS.required_field);
  const passTooShort = t(D.FORM_ERRORS.password_too_short);
  const passDontMatch = t(D.FORM_ERRORS.passwords_dont_match);
  const validationSchema = Yup.object({
    firstname: Yup.string().required(requiredField),
    lastname: Yup.string().required(requiredField),
    birthdate: Yup.date().required(requiredField),
    email: Yup.string()
      .email()
      .required(requiredField),
    password: Yup.string()
      .min(6, passTooShort)
      .required(requiredField),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], passDontMatch)
      .required(requiredField),
  });

  return (
    <PageContainer>
      <Toolbar
        title={title}
        leftIcon="back"
        onLeftIconClick={handleLeftIconPress}
      />
      <ScrollableContent>
        <section className={styles.logoContainer}>
          <Icons.peili className={styles.logo} />
          <h1>Peili</h1>
          <p>{t(D.SIGNUP.teaser)}</p>
        </section>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
            <TextInput
              name="firstname"
              type="text"
              label={t(D.PLACEHOLDERS.firstname)}
              placeholder={t(D.PLACEHOLDERS.firstname)}
            />
            <TextInput
              name="lastname"
              type="text"
              label={t(D.surname)}
              placeholder={t(D.PLACEHOLDERS.lastname)}
              style={{ marginTop: '16px' }}
            />
            <TextInput
              name="birthdate"
              type="date"
              label={t(D.birthdate)}
              placeholder={t(D.PLACEHOLDERS.birthdate)}
              style={{ marginTop: '16px' }}
            />
            <TextInput
              name="email"
              type="email"
              label={t(D.email)}
              placeholder={t(D.PLACEHOLDERS.email)}
              style={{ marginTop: '56px' }}
            />
            <TextInput
              name="password"
              type="password"
              label={t(D.password)}
              placeholder={t(D.PLACEHOLDERS.password)}
              style={{ marginTop: '16px' }}
            />
            <TextInput
              name="confirmPassword"
              type="password"
              label={t(D.password_repeat)}
              placeholder={t(D.PLACEHOLDERS.password)}
              style={{ marginTop: '16px' }}
            />
            <Button
              type="submit"
              label={t(D.SIGNUP.button_signup)}
              style={{ margin: '64px 0' }}
            />
          </Form>
        </Formik>
      </ScrollableContent>
    </PageContainer>
  );
};

export default SignupPage;
