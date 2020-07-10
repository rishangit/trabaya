import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginComponent from './login';

const AuthComponent = props => {
  useEffect(() => {}, []);

  return (
    <div>
      <Switch>
        <Redirect exact from="/admin/auth" to="/admin/auth/login" />
        <Route path="/admin/auth/login" component={LoginComponent} />
      </Switch>
    </div>
  );
};

export default AuthComponent;
