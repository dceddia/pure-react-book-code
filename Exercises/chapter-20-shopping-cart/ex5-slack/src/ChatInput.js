import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ChatInput extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired
  };

  state = {text: ''};

  setText(text) {
    this.setState({ text });
  }

  handleKeyPress = (event) => {
    if(!this.state.text) {
      return;
    }

    if(event.key === 'Enter') {
      this.props.onSendMessage(this.state.text);
      this.setText('');
    }
  }

  handleChange = (event) => {
    this.setText(event.target.value);
  }

  render () {
    return (
      <div className='chat-input'>
        <input
          type='text'
          placeholder='Type your message here. Press Enter to send.'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.text} />
      </div>
    );
  }
}
