import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MainAppPage from '../pages/MainAppPage';

const App = (): JSX.Element => (
  <Router>
    <div>
      {/* TODO: remove sample navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Landing Page</Link>
          </li>
          <li>
            <Link to="/main">Main App</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/main">
          <MainAppPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
