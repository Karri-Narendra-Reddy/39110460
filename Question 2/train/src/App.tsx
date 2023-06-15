import React from 'react';
import { BrowserRouter as Router,Route, Link, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import AuthorizationPage from './components/AuthorizationPage';
import Trains from './components/FirstPage/FirstPage';
import './App.css';
const App = () => {
  return (
    <div>
      
      <HomePage />
      <Routes>
        <Route path="/register" Component={RegistrationPage} />
        <Route path="/authorize" Component={AuthorizationPage} />
          
          </Routes>
      <Trains />
      
    </div>
  );
};

export default App;
