import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const session = localStorage.getItem('session');
      return session ? <Component {...props} /> : <Redirect to='/login' />;
    }}
  />
);

export default PrivateRoute;
