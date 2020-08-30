// React
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/set_auth_token';

//Components
import Home from './pages/home';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
