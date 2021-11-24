import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PersonName = ({ person, isSelected, onClick }) => {
  const classes = cx({
    'person-name': true,
    'person-name--unread': person.hasUnreads,
    'person-name--selected': isSelected
  });
  return (
    <div key={person.id} className={classes} onClick={onClick}>
      {person.name}
    </div>
  );
}

PersonName.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  person: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    hasUnreads: PropTypes.bool
  }).isRequired
}

export default PersonName;
