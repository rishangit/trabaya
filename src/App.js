import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainComponent from './application/main';
import LoginComponent from './modules/auth/login';
import ForgetPasswordComponent from './modules/auth/forgetPassword';
import { Helmet } from 'react-helmet';
import PrivateRoute from './common/privateRoute';
import './scss/global.scss';
import { loadTheme } from './modules/theme/theme.const';

function App(props) {
  loadTheme();
  return (
    <BrowserRouter>
      <Helmet>
        <title>Trabaya</title>
      </Helmet>
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        <Route
          exact
          path="/forgot-password"
          component={ForgetPasswordComponent}
        />
        <PrivateRoute path="/" component={MainComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
