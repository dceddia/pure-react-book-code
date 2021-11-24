import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'advance':
      return (state + 1) % 4;
    case 'off':
      return 0;
    default:
      return state;
  }
};

function Room() {
  const [lightLevel, dispatch] = useReducer(
    reducer,
    0
  );

  return (
    <>
      Lights are: {describeLightLevel(lightLevel)}
      <br />
      <button
        onClick={() => dispatch({ type: 'advance' })}
      >
        Next
      </button>
      <button
        onClick={() => dispatch({ type: 'off' })}
      >
        Turn Off
      </button>
    </>
  );
}

function describeLightLevel(level) {
  switch (level) {
    case 0:
      return 'off';
    case 1:
      return 'low';
    case 2:
      return 'medium';
    case 3:
      return 'high';
    default:
      return 'broken';
  }
}

ReactDOM.render(
  <Room />,
  document.querySelector('#root')
);
