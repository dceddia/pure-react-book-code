import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const computeTimeString = (time, isUnixTime) => {
  if(isUnixTime) {
    return moment.unix(time).fromNow();
  } else {
    return moment(time).fromNow();
  }
}

const Time = ({ time, isUnixTime }) => {
  return (
    <span className="time">
      {computeTimeString(time, isUnixTime)}
    </span>
  );
};
Time.propTypes = {
  time: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isUnixTime: PropTypes.bool
};

export default Time;

