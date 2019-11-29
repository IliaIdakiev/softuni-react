import React from 'react';
import Posts from '../Posts/Posts';

import './CreatePost.css';

export default function CreatePost() {
  return <div className="CreatePost">
    <form>
      <textarea></textarea>
      <button>Post</button>
    </form>
    <Posts limit={3} />
  </div>;
}