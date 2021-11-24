import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ControlledInputFn = () => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
    />
  );
};

class ControlledInput extends React.Component {
  state = { text: '' };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
      />
    );
  }
}

const TrickInput = () => {
  const [text, setText] = useState(
    'try typing something'
  );

  const handleChange = event => {
    setText('haha nope');
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
    />
  );
};

const NoNumbersInput = () => {
  const [text, setText] = useState('');

  const handleChange = event => {
    let text = event.target.value;
    setText(text.replace(/[0-9]/g, ''));
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
    />
  );
};

const EasyInput = () => <input type="text" />;

class SelectDemo extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { selection: '' };
  }

  handleSelection = event => {
    this.setState({ selection: event.target.value });
  };

  render() {
    let options = [
      { id: 0, value: '', label: '--' },
      { id: 1, value: 'MA', label: 'Massachusetts' },
      { id: 2, value: 'ME', label: 'Maine' },
      { id: 3, value: 'VT', label: 'Vermont' },
      { id: 4, value: 'NH', label: 'New Hampshire' },
      { id: 5, value: 'RI', label: 'Rhode Island' }
    ];
    return (
      <div>
        <div>
          The selected value is{' '}
          {this.state.selection || '(nothing)'}
        </div>
        <select
          value={this.state.selection}
          onChange={this.handleSelection}
        >
          {options.map(option => (
            <option
              value={option.value}
              key={option.id}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const RefInput = () => {
  const input = useRef();

  const showValue = () => {
    alert(`Input contains: ${input.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={showValue}>
        Alert the Value!
      </button>
    </div>
  );
};

let Demo = () => (
  <div>
    <div>Here is a controlled input:</div>
    <ControlledInputFn />
    <br />
    <br />

    <div>Here is the same thing as a class:</div>
    <ControlledInput />
    <br />
    <br />

    <div>Here's a trick input (try typing):</div>
    <TrickInput />
    <br />
    <br />

    <div>This input does not accept numbers:</div>
    <NoNumbersInput />
    <br />
    <br />

    <div>This input is uncontrolled:</div>
    <EasyInput />
    <br />
    <br />

    <div>
      This input is uncontrolled, but uses a ref to get
      the value when you click the button:
    </div>
    <RefInput />
    <br />
    <br />

    <div>
      <code>textarea</code> values should be set with
      the <code>value</code> or{' '}
      <code>defaultValue</code> props, not with
      children:
    </div>
    <textarea defaultValue="Default value (uncontrolled)" />
    <br />
    <br />

    <div>
      The <code>select</code> element works differently
      than in HTML:
    </div>
    <SelectDemo />
    <br />
    <br />
  </div>
);

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
);

export { Demo }; // for testing
