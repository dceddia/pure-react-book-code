import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Exercise1 extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  };

  handleChange = event => {
    this.setState({
      // This "trick" only works if the "name" prop on the input
      // matches the name of the key in state
      [event.target.name]: event.target.value
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
            value={firstName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Last Name
          <br />
          <input
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </label>

        <h1>
          Hello {firstName} {lastName}!
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Exercise1 />,
  document.querySelector('#root')
);
