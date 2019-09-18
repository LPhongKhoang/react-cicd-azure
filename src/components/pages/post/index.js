import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: [],
      selectedPostId: null
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { loading, posts, selectedPostId } = this.state;
    let postShow;
    if(loading) {
      postShow = <div>Loading...</div>;
    } else{
      postShow = posts.map(p => <PostItem title={p.title} body={p.body}/> );
    }

    return postShow;
  }

  
}