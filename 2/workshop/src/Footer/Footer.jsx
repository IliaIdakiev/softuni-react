import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer() {
  return <nav className="Footer">
    <ul>
      <Link to="/">Posts</Link>
      <Link to="/create-posts">New Post</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </ul>
  </nav>;
};

export default Footer;