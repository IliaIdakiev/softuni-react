import React from 'react';
import './Main.css';

function Main({ children, title }) {
  return (
    <div className="Main">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Main;
