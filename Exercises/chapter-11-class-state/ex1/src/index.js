import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function onOff(value) {
  const text = value ? 'on' : 'off';
  return <span className={text}>{text}</span>;
}

class House extends React.Component {
  state = {
    kitchen: true,
    bathroom: false,
    livingRoom: true,
    bedroom: false
  };

  toggle = room => {
    this.setState(prevState => ({
      [room]: !prevState[room]
    }));
  };

  lightsOut = () => {
    this.setState({
      kitchen: false,
      bathroom: false,
      livingRoom: false,
      bedroom: false
    });
  };

  render() {
    const {
      kitchen,
      bathroom,
      livingRoom,
      bedroom
    } = this.state;

    return (
      <div>
        Kitchen lights: {onOff(kitchen)}
        <br />
        Bathroom lights: {onOff(bathroom)}
        <br />
        Living Room lights: {onOff(livingRoom)}
        <br />
        Bedroom lights: {onOff(bedroom)}
        <br />
        <button onClick={() => this.toggle('kitchen')}>
          Kitchen
        </button>
        <button
          onClick={() => this.toggle('bathroom')}
        >
          Bathroom
        </button>
        <button
          onClick={() => this.toggle('livingRoom')}
        >
          Living Room
        </button>
        <button onClick={() => this.toggle('bedroom')}>
          Bedroom
        </button>
        <br />
        <button onClick={this.lightsOut}>
          Goodnight
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <House />,
  document.querySelector('#root')
);
