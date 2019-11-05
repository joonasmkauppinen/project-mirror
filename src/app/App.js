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

import { isSession } from '../utils/apicall';

const App = () => {
  console.log(`session: ${isSession()}`);
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <Router basename="/project-mirror">
      <div>
        <Switch>
          <Route path="/login" render={() => <LoginPage />} />
          <Route
            path="/main"
            render={props =>
              isSession() === true ? (
                <MainAppPage />
              ) : (
                <Redirect
                  to={{
                    pathname: '',
                    state: { from: props.location },
                  }}
                />
              )
            }
          />
          <Route
            path="/"
            render={props =>
              isSession() === false ? (
                <LandingPage />
              ) : (
                <Redirect
                  to={{
                    pathname: '/main',
                    state: { from: props.location },
                  }}
                />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
