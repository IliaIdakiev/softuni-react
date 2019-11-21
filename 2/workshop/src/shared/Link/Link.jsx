import React from 'react';
import './Link.css';
import { Link as ReactRouterDomLink } from 'react-router-dom';

function Link({ children, to }) {
  return <li className="listItem">
    <ReactRouterDomLink to={to}>{children}</ReactRouterDomLink>
  </li>;
};

export default Link;