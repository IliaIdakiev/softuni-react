import React from 'react';
import Posts from '../publications/Posts/Posts';
import './Profile.css';

export default function Profile() {
  return <div className="Profile">
    <img src="" alt="profle" />
    <div className="personal-info">
      <p>
        <span>Email:</span>
        myemail@abv.bg
      </p>
      <p>
        <span>Posts:</span>
        100000
      </p>
    </div>
    <Posts limit={3} />
  </div>;
}