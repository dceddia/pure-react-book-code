import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  useEffect(() => {
    const announceClick = e =>
      console.log('clicked!', e.clientX, e.clientY);

    // Set up a listener for the click event.
    // We're passing a function here so that we can pass
    // the same function to removeEventListener and clean
    // it up.
    document.addEventListener('click', announceClick);
    return () =>
      // When the effect is cleaned up, remove the click handler
      document.removeEventListener(
        'click',
        announceClick
      );
  }, []); // only run once, on mount

  return <div>click anywhere!</div>;
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
