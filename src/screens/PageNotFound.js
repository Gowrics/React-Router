import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <NavLink className={'navlink'}  to="/">Go back to Home</NavLink>
    </div>
  );
};

export default PageNotFound;
