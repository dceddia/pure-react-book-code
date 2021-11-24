import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // Initialize the title from the document's title
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    // Since we're modifying something outside the
    // component, it needs to be done inside a useEffect.
    //
    // So here we set the title, and the `title` state is
    // guaranteed to be the most recent value.
    document.title = title;
  });

  return (
    <label>
      Enter a new title:
      <input
        value={title}
        /* 
          just setting state here, not changing the
          document.title directly!
        */
        onChange={e => setTitle(e.target.value)}
      />
    </label>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
