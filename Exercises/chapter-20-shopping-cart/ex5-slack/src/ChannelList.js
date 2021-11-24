import React from 'react';
import PropTypes from 'prop-types';
import ChannelName from './ChannelName';

const ChannelList = ({ channels, selectedId, onChannelSelected }) => (
  <div className='channel-list'>
    <h5 className='channel-header'>Channels</h5>
    {channels.map(channel =>
      <ChannelName
        key={channel.id}
        channel={channel}
        isSelected={channel.id === selectedId}
        onClick={() => onChannelSelected(channel.id)}/>)}
    </div>
);

ChannelList.propTypes = {
  selectedId: PropTypes.number,
  onChannelSelected: PropTypes.func.isRequired,
  channels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    hasUnreads: PropTypes.bool
  })).isRequired
}

export default ChannelList;
