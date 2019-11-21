const postService = {
  load: function (id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts${id ? `/${id}` : ''}`).then(res => res.json());
  }
};

export default postService;