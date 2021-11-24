import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
  return (
    React.createElement('div', {className: 'book'},
      React.createElement('div', {className: 'title'}, 'The Title'),
      React.createElement('div', {className: 'author'}, 'The Author'),
      React.createElement('ul', {className: 'stats'},
        React.createElement('li', {className: 'rating'}, 'The Title'),
        React.createElement('li', {className: 'isbn'}, '12-345678-910')
      )
    )
  );
}

ReactDOM.render(<Example/>, document.querySelector('#root'));
