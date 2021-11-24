import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const LogEffect = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('latest value:', text);
  });

  return (
    <input
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
};

// 1. Destructure the `subreddit` from props:
function Reddit({ subreddit }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the data when the component mounts
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => res.json())
      .then(json =>
        // Save the posts into state
        setPosts(json.data.children.map(c => c.data))
      );
  }, [subreddit, setPosts]);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function RedditInput() {
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

const Demo = () => (
  <>
    <h2>Logging Example</h2>
    <LogEffect />
    <h2>Reddit Example</h2>
    <RedditInput />
  </>
);

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
);
