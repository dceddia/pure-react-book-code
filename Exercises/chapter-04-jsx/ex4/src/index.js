import React from 'react';
import ReactDOM from 'react-dom';

function LoginIndicator() {
  // Also try: undefined, null, false, true, 42...
  var username = "yourname";

  // Fill in the rest (feel free to write code
  // above the return statement too).
  return (
    <span>
      {username
         ? 'Hello ' + username
         : 'Not logged in'}
    </span>
  );
}

ReactDOM.render(<LoginIndicator/>, document.querySelector('#root'));
