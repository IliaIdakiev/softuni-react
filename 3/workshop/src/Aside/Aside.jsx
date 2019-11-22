import React from 'react';
import './Aside.css';
import Link from '../shared/Link/Link';

function Aside({ isLogged }) {
  return <aside className="Aside">
    <ul>
      <Link to="/">Posts</Link>
      {isLogged && <Link to="/create-posts">New Post</Link>}
      {isLogged && <Link to="/profile">Profile</Link>}
      {!isLogged && <Link to="/register">Register</Link>}
      {!isLogged && <Link to="/login">Login</Link>}
    </ul>
  </aside>;
};

export default Aside;