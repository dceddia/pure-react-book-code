import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Exercise2 extends React.Component {
  constructor(props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  updateName = () => {
    this.setState({
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value
    });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <label>
          First Name
          <br />
          <input
            name="firstName"
            ref={this.firstNameRef}
          />
        </label>
        <br />
        <label>
          Last Name
          <br />
          <input
            name="lastName"
            ref={this.lastNameRef}
          />
        </label>
        <button onClick={this.updateName}>
          Submit
        </button>

        <h1>
          Hello {firstName} {lastName}!
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Exercise2 />,
  document.querySelector('#root')
);
