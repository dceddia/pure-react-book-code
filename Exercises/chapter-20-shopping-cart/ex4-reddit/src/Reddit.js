import React, {Component} from 'react';
import RedditListing from './RedditListing';

export default class Reddit extends Component {
  state = {
    posts: {}
  };

  componentDidMount() {
    // To use static data, uncomment this line:
    // this.processPosts(reactjsPosts.data.children);

    // To fetch live data from Reddit, use this block of code:
    fetch('http://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(json => this.processPosts(json.data.children))
      .catch(err => console.log(err));
  }

  processPosts = (posts) => {
    // Make the data nicer to work with
    let postsHash = posts.reduce((hash, post) => {
      hash[post.data.id] = post.data;
      return hash;
    }, {});

    this.setState({
      posts: postsHash
    });
  }

  handleUpvote = (postId) => {
    // Immutably update the post:
    this.setState({
      // Set 'posts' to...
      posts: {
        // Every existing post, but then...
        ...this.state.posts,
        // Replace the one at 'postId' with...
        [postId]: {
          // All the keys/values it originally had, but...
          ...this.state.posts[postId],
          // Replace its 'score' with a new value
          score: this.state.posts[postId].score + 1
        }
      }
    });
  }

  handleDownvote = (postId) => {
    // Immutably update the post:
    this.setState({
      // Set 'posts' to...
      posts: {
        // Every existing post, but then...
        ...this.state.posts,
        // Replace the one at 'postId' with...
        [postId]: {
          // All the keys/values it originally had, but...
          ...this.state.posts[postId],
          // Replace its 'score' with a new value
          score: this.state.posts[postId].score - 1
        }
      }
    });
  }

  render() {
    const posts = Object.keys(this.state.posts)
      .map(id => this.state.posts[id]);

    return (
      <RedditListing
        posts={posts}
        onUpvote={this.handleUpvote}
        onDownvote={this.handleDownvote} />
    );
  }
}
