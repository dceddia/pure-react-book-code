import React from 'react';
import ReactDOM from 'react-dom';

// !!!
//
// You will see errors when you run this app. That's expected :)
// Comment out the broken code and play around with it to test the
// boundaries of JSX.
//
// !!!


// a. Name a component starting with a lowercase letter
function lowercaseComponent() {
  return (
    <span>This will not render</span>
  );
}

// b. Returning 2 elements at once
function TwoElementsAtOnce() {
  return (
    <span>One</span>
    <span>Two</span>
  );
}

// c. Returning an array
function AnArrayOfFail() {
  return [
    <span>One</span>,
    <span>Two</span>
  ];
}

// d. 2 expressions inside single braces
function TwoExpressions() {
  var x = 7;
  return (
    <span>{x && 5; x && 7}</span>
  );
}

// e. Return from within JSX
function ReturnInJSX() {
  return (
    <span>{return}</span>
  );
}

// f. Function calls in JSX
function AlertHello() {
  return (
    <span>{alert('hello')}</span>
  );
}

// g. Quoted strings inside JSX
function QuotedString() {
  return (
    <div>
      <span>"Quoted string"</span>
      <span>{"Quoted string inside braces"}</span>
      <span>{'single quotes'}</span>
    </div>
  );
}

ReactDOM.render(<QuotedString/>, document.querySelector('#root'));
