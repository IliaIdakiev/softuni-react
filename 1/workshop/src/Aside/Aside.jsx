import React from 'react';
import './Aside.css';
import Link from '../shared/Link/Link';

function Aside() {
  return <aside className="Aside">
    <ul>
      <Link url="#">Aside Link 1</Link>
      <Link url="#">Asdie Link 2</Link>
    </ul>
  </aside>;
};

export default Aside;