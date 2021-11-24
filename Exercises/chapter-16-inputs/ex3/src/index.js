import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Exercise3 extends React.Component {
  state = {
    size: 'medium',
    glutenFree: false,
    topping: '',
    instructions: ''
  };

  setSize = event => {
    this.setState({
      size: event.target.value
    });
  };

  setGlutenFree = event => {
    this.setState({
      glutenFree: event.target.checked
    });
  };

  setInstructions = event => {
    this.setState({
      instructions: event.target.value
    });
  };

  setTopping = event => {
    this.setState({
      topping: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      size,
      glutenFree,
      topping,
      instructions
    } = this.state;

    alert(`Your order:
    Size: ${size}
    Gluten free? ${glutenFree ? 'yes' : 'no'}
    Topping: ${topping || 'none'}
    Special instructions: ${instructions || 'none'}`);
  };
  render() {
    const {
      size,
      glutenFree,
      instructions,
      topping
    } = this.state;

    return (
      <>
        <h1>Order Your Pizza</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Size</h2>
          <label>
            <input
              type="radio"
              value="small"
              checked={size === 'small'}
              onChange={this.setSize}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={size === 'medium'}
              onChange={this.setSize}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="large"
              checked={size === 'large'}
              onChange={this.setSize}
            />
            Large
          </label>
          <br />
          <br />
          <label>
            Topping
            <br />
            <select
              onChange={this.setTopping}
              value={topping}
            >
              <option value="">
                - Pick a topping -
              </option>
              <option value="pepperoni">
                Pepperoni
              </option>
              <option value="peppers+onions">
                Peppers and onions
              </option>
              <option value="pineapple">
                Pineapple
              </option>
            </select>
          </label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              checked={glutenFree}
              onChange={this.setGlutenFree}
            />
            Gluten free
          </label>
          <br />
          <br />
          <label>
            Special instructions:
            <br />
            <textarea
              value={instructions}
              onChange={this.setInstructions}
            />
          </label>
          <br />
          <br />
          <button type="submit">Send Order</button>
        </form>
      </>
    );
  }
}

ReactDOM.render(
  <Exercise3 />,
  document.querySelector('#root')
);
