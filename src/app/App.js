import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MainAppPage from '../pages/MainAppPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import { isSession as auth } from '../utils/apicall';

const App = () => {
  const signup = () => (auth() ? <Redirect to="/main" /> : <SignupPage />);
  const login = () => (auth() ? <Redirect to="/main" /> : <LoginPage />);
  const landing = () => (auth() ? <Redirect to="/main" /> : <LandingPage />);
  const mainApp = () => (!auth() ? <Redirect to="/" /> : <MainAppPage />);

  return (
    <Router basename="/project-mirror">
      <Switch>
        <Route path="/main" render={mainApp} />
        <Route path="/signup" render={signup} />
        <Route path="/login" render={login} />
        <Route path="/" render={landing} />
      </Switch>
    </Router>
  );
};

export default App;
