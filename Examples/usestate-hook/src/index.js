import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class OneTimeButton extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    // The handler won't be called if the button
    // is disabled, so if we got here, it's safe
    // to trigger the click.
    this.props.onClick();

    // Ok, no more clicking.
    this.setState({ clicked: true });
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.state.clicked}
      >
        You Can Only Click Me Once
      </button>
    );
  }
}

function OneTimeButtonFn(props) {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    props.onClick();

    // Ok, no more clicking.
    setClicked(true);
  };

  return (
    <button onClick={handleClick} disabled={clicked}>
      You Can Only Click Me Once
    </button>
  );
}

function StepTracker() {
  const [steps, setSteps] = useState(0);

  function increment() {
    setSteps(steps => steps + 1);
  }

  return (
    <div>
      Today you've taken {steps} steps!
      <br />
      <button onClick={increment}>
        I took another step
      </button>
    </div>
  );
}

const MultiCounter = () => {
  const [counts, setCounts] = useState({
    countA: 0,
    countB: 0
  });

  const incA = () =>
    setCounts(counts => ({
      ...counts,
      countA: counts.countA + 1
    }));

  const incB = () =>
    setCounts(counts => ({
      ...counts,
      countB: counts.countB + 1
    }));

  const badIncA = () =>
    setCounts({
      countA: counts.countA + 1
    });

  return (
    <>
      <div>A: {counts.countA}</div>
      <div>B: {counts.countB}</div>
      <button onClick={incA}>Increment A</button>
      <button onClick={incB}>Increment B</button>
      <button onClick={badIncA}>
        Increment A Badly
      </button>
    </>
  );
};

const Demo = () => (
  <main>
    <h2>
      Class-based <code>OneTimeButton</code>
    </h2>
    <OneTimeButton onClick={() => alert('hi')} />
    <h2>
      Hooks-based <code>OneTimeButton</code>
    </h2>
    <OneTimeButtonFn onClick={() => alert('hi')} />
    <h2>
      <code>StepTracker</code>
    </h2>
    <StepTracker />
    <h2>
      <code>MultiCounter</code> (updating an object
      with useState)
    </h2>
    <MultiCounter />
  </main>
);

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
);
