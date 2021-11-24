import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function AddressLabel({ mailingLabel, className }) {
  var { name, addressLine1, addressLine2 } = mailingLabel;
  return (
    <div className={`mailing-label ${className || ''}`}>
      <div className="name">{name}</div>
      <div className="addressLine1">{addressLine1}</div>
      <div className="addressLine2">{addressLine2}</div>
    </div>
  );
}
AddressLabel.propTypes = {
  className: PropTypes.string,
  mailingLabel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  }).isRequired
};

function Stamp() {
  return (
    <div className="stamp">
      <span className="text">Stamp</span>
    </div>
  );
}

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <AddressLabel
        className="from-label"
        mailingLabel={fromPerson}
      />
      <AddressLabel className="to-label" mailingLabel={toPerson} />
      <Stamp />
    </div>
  );
}
Envelope.propTypes = {
  toPerson: PropTypes.object.isRequired,
  fromPerson: PropTypes.object.isRequired
};

const fromPerson = {
  name: 'Sender',
  addressLine1: '123 Fake St',
  addressLine2: 'Boston, MA 02118'
};

const toPerson = {
  name: 'Receiver',
  addressLine1: '124 Fake St',
  addressLine2: 'Boston, MA 02118'
};
ReactDOM.render(
  <Envelope toPerson={toPerson} fromPerson={fromPerson} />,
  document.querySelector('#root')
);


    // Slots pattern:
    //   1. renders NavBar
    //   2. then passes it to Layout
    <Layout nav={<NavBar />} />

    // Render props pattern:
    //   1. renders Layout
    //   2. then Layout calls props.nav()
    //   3. which in turn renders NavBar
    <Layout nav={props => <NavBar />} />


