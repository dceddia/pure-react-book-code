import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function AddressLabel({ mailingLabel }) {
  const { name, addressLine1, addressLine2 } = mailingLabel;

  return (
    <div className="mailingLabel">
      <div className="name">{name}</div>
      <div className="addressLine1">{addressLine1}</div>
      <div className="addressLine2">{addressLine2}</div>
    </div>
  );
}

AddressLabel.propTypes = {
  mailingLabel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  }).isRequired
};

const label = {
  name: 'Dave',
  addressLine1: '123 Fake St',
  addressLine2: 'Boston, MA 02118'
};
ReactDOM.render(
  <AddressLabel mailingLabel={label} />,
  document.querySelector('#root')
);
