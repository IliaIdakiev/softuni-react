import React from 'react';
import './Aside.css';
import Link from '../shared/Link/Link';

function Aside() {
  return <aside className="Aside">
    <ul>
      <Link to="/">Posts</Link>
      <Link to="/create-posts">New Post</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </ul>
  </aside>;
};

export default Aside;