import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';

function Navigation() {
  return <nav className="Navigation">
    <ul>
      <Link url="#">
        <img id="logo" src="/logo192.png" alt="my-app-logo" />
      </Link>
      <Link url="#">Link 1</Link>
      <Link url="#">Link 2</Link>
    </ul>
  </nav>;
};

export default Navigation;