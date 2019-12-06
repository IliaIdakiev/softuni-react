import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLogged, redirectTo, ...props }) => {
  return isLogged ? <Route {...props} /> : <Redirect to={redirectTo} />;
}

export default ProtectedRoute;