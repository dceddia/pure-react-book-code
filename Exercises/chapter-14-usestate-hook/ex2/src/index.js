import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const RandomList = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    // The "updater" form (passing a function that receives the old state and returns the new one) is
    // the safest choice when the new state depends on the old state. It guarantees that the old state
    // won't be stale (which can happen if you're accessing old state from inside a closure).
    setNumbers(nums => [...nums, Math.random()]);

    /* In this example, this would work too. Why won't "numbers" be stale, here, even though addNumber is a closure? */
    // setNumbers([...numbers, Math.random()]);

    /* This won't work, because pushing onto an array doesn't replace the original array,
       and React won't re-render unless the state value looks new. Try it out: */
    // numbers.push(Math.random());
    // setNumbers(numbers);
  };

  return (
    <div>
      <h1>Random Numbers</h1>
      <button onClick={addNumber}>Add a Number</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(
  <RandomList />,
  document.querySelector('#root')
);
