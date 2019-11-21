import React from 'react';
import './Posts.css';
import Post from './Post/Post';
import postService from '../services/post-service';

// function Posts() {
//   return <div className="Posts">
//     <Post imageUrl="/logo192.png" imageAlt="alt" author="Me">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, reiciendis quam. Deleniti, voluptatibus odit veritatis libero ipsam, suscipit vitae obcaecati sed ipsa quaerat neque molestias consequuntur reiciendis ipsum tempora cum.</Post>
//   </div>;
// };

class Posts extends React.Component {
  state = {
    posts: null
  };
  textInput = null;

  setTextInputRef = element => {
    debugger;
    this.textInput = element;
  };

  componentDidMount() {
    postService.load().then(posts => {
      this.setState({ posts });
    });
  }

  inputChangeHandler = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { posts } = this.state;

    return <div>
      <input type="text" ref={this.setTextInputRef} onChange={this.inputChangeHandler} />
      {posts ?
        <div className="Posts">
          {posts.map((post) => <Post key={post.id} imageUrl="/logo192.png" imageAlt="alt" author={post.userId}>{post.body}</Post>)}
        </div> : <div>Loading...</div>
      }
    </div>
  }
}

export default Posts;