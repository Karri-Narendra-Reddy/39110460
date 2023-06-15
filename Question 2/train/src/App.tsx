import React from 'react';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import AuthorizationPage from './components/AuthorizationPage';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" Component={HomePage} />
        <Route path="/register" Component={RegistrationPage} />
        <Route path="/authorize" Component={AuthorizationPage} />
      </Router>
    </div>
  );
};

export default App;
