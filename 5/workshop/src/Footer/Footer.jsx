import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer({ isLogged }) {
  return <nav className="Footer">
    <ul>
      <Link to="/">Posts</Link>
      {isLogged && <Link to="/create-posts">New Post</Link>}
      {isLogged && <Link to="/profile">Profile</Link>}
      {!isLogged && <Link to="/register">Register</Link>}
      {!isLogged && <Link to="/login">Login</Link>}
    </ul>
  </nav>;
};

export default Footer;