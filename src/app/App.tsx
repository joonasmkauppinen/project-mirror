import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MainAppPage from '../pages/MainAppPage';

import { isSession } from '../utils/apicall';

const App: FC = () => {
  console.log(`session: ${isSession()}`);
  return (
    <Router basename="/project-mirror">
      <div>
        {/* TODO: remove sample navigation */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Landing Page</Link>
            </li>
            <li>
              <Link to="/main">Main App</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
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
