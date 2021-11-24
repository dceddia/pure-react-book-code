import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ChannelName = ({ channel, isSelected, onClick }) => {
  const classes = cx({
    'channel-name': true,
    'channel-name--unread': channel.hasUnreads,
    'channel-name--selected': isSelected
  });

  return (
    <div key={channel.id} className={classes} onClick={onClick}>
      <span className='hash'>#</span>{channel.name}
    </div>
  );
}

ChannelName.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  channel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    hasUnreads: PropTypes.bool
  }).isRequired
}

export default ChannelName;
