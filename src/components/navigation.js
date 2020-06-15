import React from 'react';
import { Link } from "gatsby";
import { APP_ROUTES } from '../helpers/constants';

function Navigation({isHomePage}) {
  return (
    <ul className="navigation">
      {Object.keys(APP_ROUTES).map(route => (
        <li key={route}>
          <Link to={APP_ROUTES[route]}>{route}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation;