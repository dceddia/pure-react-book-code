import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Email({ email }) {
  var { sender, subject, date, message } = email;
  return (
    <div className="email">
      <input type="checkbox"/>
      <i className="fa fa-thumb-tack pin"/>
      <div className="content">
        <div className="line1">
          <div className="sender">{sender}</div>
          <div className="subject">{subject}</div>
          <div className="date">{date}</div>
        </div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}
Email.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired
};

var email =	{
	sender: "React Newsletter",
	subject: "React Newsletter - Issue 36",
	date: "Jul 15",
	message: "React Newsletter Issue 36 - July 15th Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme" 
}

ReactDOM.render(
  <Email email={email}/>,
  document.getElementById('root')
);
