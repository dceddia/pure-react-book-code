import React from 'react';
import PropTypes from 'prop-types';
import ChannelList from './ChannelList';
import PeopleList from './PeopleList';

const SidebarPane = ({
  channels,
  people,
  selectedChannelId,
  selectedPersonId,
  onChannelSelected,
  onPersonSelected
}) => (
  <div className='sidebar-pane'>
    <ChannelList
      channels={channels}
      selectedId={selectedChannelId}
      onChannelSelected={onChannelSelected} />
    <PeopleList
      people={people}
      selectedId={selectedPersonId}
      onPersonSelected={onPersonSelected} />
  </div>
);

SidebarPane.propTypes = {
  channels: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  onChannelSelected: PropTypes.func.isRequired,
  onPersonSelected: PropTypes.func.isRequired,
  selectedChannelId: PropTypes.number,
  selectedPersonId: PropTypes.number
};

export default SidebarPane;
