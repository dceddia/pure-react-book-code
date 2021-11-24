import React from 'react';
import PropTypes from 'prop-types';
import PersonName from './PersonName';

const PeopleList = ({ people, selectedId, onPersonSelected }) => (
  <div className='people-list'>
    <h5 className='people-header'>People</h5>
    {people.map(person =>
      <PersonName
        key={person.id}
        person={person}
        isSelected={person.id === selectedId}
        onClick={() => onPersonSelected(person.id)} />
    )}
  </div>
);

PeopleList.propTypes = {
  selectedId: PropTypes.number,
  onPersonSelected: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    hasUnreads: PropTypes.bool
  })).isRequired
}

export default PeopleList;
