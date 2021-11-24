import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Reddit extends React.Component {
  state = {
    posts: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://www.reddit.com/r/${
          this.props.subreddit
        }.json`
      )
      .then(res => {
        const posts = res.data.data.children.map(
          obj => obj.data
        );
        this.setState({ posts });
      })
      .finally(() =>
        this.setState({ isLoading: false })
      );
  }

  render() {
    const { posts, isLoading } = this.state;

    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <Reddit subreddit="reactjs" />,
  document.getElementById('root')
);
