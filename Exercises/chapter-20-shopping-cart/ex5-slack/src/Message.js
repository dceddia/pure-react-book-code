import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className='message'>
    <span className='message--avatar' key={message.id + '_avatar'} />
    <span className='message--name' key={message.id + '_name'}>
      {message.userName}
    </span>
    <span className='message--time' key={message.id + '_time'}>
      {message.timestamp.toString()}
    </span>
    <p className='message--text' key={message.id + '_text'}>
      {message.text}
    </p>
  </div>
);

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    userName: PropTypes.string,
    timestamp: PropTypes.object
  })
};

export default Message;
