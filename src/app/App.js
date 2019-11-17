import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';
import { isSession as auth } from '../utils/apicall';
import { getTransitionParams } from '../utils/pageTransition';
import LandingPage from '../pages/LandingPage';
import MainAppPage from '../pages/MainAppPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import childFactoryCreator from '../utils/childFactoryCreator';
import TaskPage from '../pages/TaskPage';

const App = () => {
  const location = useLocation();
  const { action } = useHistory();
  const [timeout, animation] = getTransitionParams(action);
  const signup = () => (auth() ? <Redirect to="/main" /> : <SignupPage />);
  const login = () => (auth() ? <Redirect to="/main" /> : <LoginPage />);
  const landing = () => (auth() ? <Redirect to="/main" /> : <LandingPage />);
  const mainApp = () => (!auth() ? <Redirect to="/" /> : <MainAppPage />);
  const task = () => (!auth() ? <Redirect to="/" /> : <TaskPage />);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TransitionGroup childFactory={childFactoryCreator(animation)}>
          <CSSTransition
            key={location.key}
            timeout={timeout}
            classNames={{ ...animation }}
          >
            <Switch location={location}>
              <Route path="/task" render={task} />
              <Route path="/main" render={mainApp} />
              <Route path="/signup" render={signup} />
              <Route path="/login" render={login} />
              <Route path="/" render={landing} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </PersistGate>
    </Provider>
  );
};

export default App;
