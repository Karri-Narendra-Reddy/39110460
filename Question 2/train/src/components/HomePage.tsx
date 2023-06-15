import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>John Doe Railways</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/authorize">Authorize</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
