import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import AuthorizationPage from './components/AuthorizationPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" Component={HomePage} />
        <Route path="/register" Component={RegistrationPage} />
        <Route path="/authorize" Component={AuthorisationPage} />
      </Switch>
    </div>
  );
};

export default App;
