import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// 1. Destructure the `subreddit` from props:
function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Clear the error & data before fetching new data
    setError(null);
    setPosts([]);

    // Fetch posts
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => {
        if (res.ok) {
          return res;
        }
        throw new Error('Could not fetch posts');
      })
      .then(res => res.json())
      .then(json =>
        // Save the posts into state
        setPosts(json.data.children.map(c => c.data))
      )
      .catch(error => {
        // Save the error in state
        setError(error.message);
      });
  }, [subreddit, setPosts]);

  return (
    <ul>
      {error
        ? error
        : posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
    </ul>
  );
}

function App() {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [inputValue, setValue] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(
    inputValue
  );

  // Update the subreddit when the user presses enter
  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
