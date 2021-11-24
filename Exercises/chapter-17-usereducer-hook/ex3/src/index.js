import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'keypress':
      // if the lock is already unlocked, leave it alone
      if (state.status === 'unlocked') {
        return state;
      }

      // if this key matches the next one in the sequence, keep it
      if (
        action.value ===
        parseInt(state.combo[state.nextKeyIndex], 10)
      ) {
        const nextKeyIndex = state.nextKeyIndex + 1;
        return {
          ...state,
          nextKeyIndex,
          status:
            nextKeyIndex === state.combo.length
              ? 'unlocked'
              : 'locked'
        };
      } else {
        // if this key was wrong, reset
        return {
          ...state,
          nextKeyIndex: 0
        };
      }

    default:
      return state;
  }
};

function Keypad({ combo }) {
  const [lock, dispatch] = useReducer(reducer, {
    combo,
    status: 'locked',
    nextKeyIndex: 0
  });

  return (
    <>
      <p>Enter the correct combination:</p>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <button
          key={i}
          onClick={() =>
            dispatch({ type: 'keypress', value: i })
          }
        >
          {i}
        </button>
      ))}
      <p>The lock is {lock.status}</p>
      <p>
        You've gotten {lock.nextKeyIndex} keys correct.
      </p>
    </>
  );
}

ReactDOM.render(
  <Keypad combo="4453" />,
  document.querySelector('#root')
);
