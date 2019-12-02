import React from 'react';
import PropTypes from 'prop-types';

import './Posts.css';
import Post from './Post/Post';
import postService from '../../services/post-service';

const Posts = ({ limit }) => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    postService.load(null, limit).then(posts => {
      setPosts(posts);
    });
  }, [limit]);

  return <div>
    {posts ?
      <div className="Posts">
        {posts.map((post) =>
          <Post key={post._id} imageUrl="/logo192.png" imageAlt="alt" author={post.author.username}>{post.description}</Post>)}
      </div> : <div>Loading...</div>
    }
  </div>;
};

Posts.propTypes = {
  limit: PropTypes.number
};

export default Posts;