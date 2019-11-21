import React from 'react';
import '../shared/styles/LoginAndRegister.css';

export default function Login() {
  return <form className="Login">
    <div className="form-control">
      <label>Username</label>
      <input type="text" />
    </div>
    <div className="form-control">
      <label>Password</label>
      <input type="password" />
    </div>
    <div className="form-control">
      <button type="submit">Login</button>
    </div>
  </form>;
}