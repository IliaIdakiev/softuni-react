import React from 'react';
import Post from '../Posts/Post/Post';
import service from '../../services/post-service';

export default class Detail extends React.Component {
  state = {
    post: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    service.load(id).then(post => {
      this.setState({ post });
    });
  }

  render() {
    const { post } = this.state;
    return post && <Post description={post.description} author={post.author.username} />
  }
}