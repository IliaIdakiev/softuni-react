import React from 'react';

import '../shared/styles/LoginAndRegister.css';

export default function Register() {
  return <form className="Register">
    <div className="form-control">
      <label>Username</label>
      <input type="text" />
    </div>
    <div className="form-control">
      <label>Password</label>
      <input type="password" />
    </div>
    <div className="form-control">
      <label>Re-Password</label>
      <input type="password" />
    </div>
    <div className="form-control">
      <button type="submit">Register</button>
    </div>
  </form>;
}