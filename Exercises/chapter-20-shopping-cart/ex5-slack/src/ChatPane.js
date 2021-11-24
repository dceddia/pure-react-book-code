import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import EmptyMessageList from './EmptyMessageList';
import ChatInput from './ChatInput';

export default class ChatPane extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    onSendMessage: PropTypes.func.isRequired
  };

  componentDidMount() {
    if(this.messageList) {
      this.messageList.scrollToBottom();
    }
  }

  render () {
    const {messages, onSendMessage} = this.props;

    return (
      <div className='chat-pane'>
        {messages.length > 0 ?
          <MessageList
            messages={messages}
            ref={cmp => {this.messageList = cmp}} />
          : <EmptyMessageList/>
        }
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    );
  }
}
