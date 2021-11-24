import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ activeTab, onTabChange, items }) => {
  const itemCount = items.reduce((sum, item) => {
    return sum + item.count
  }, 0);
  const itemTotal = items.reduce((sum, item) => {
    return sum + (item.price * item.count)
  }, 0);

  return (
    <nav className="App-nav">
      <ul>
        <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
          <a onClick={() => onTabChange(0)}>Items</a>
        </li>
        <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
          <a onClick={() => onTabChange(1)}>Cart</a>
        </li>
      </ul>
      <div className="App-nav-item App-nav-cart-summary" onClick={onTabChange.bind(this, 1)}>
        <i className="fa fa-shopping-cart"/>
        <span className="summary-item-count">
          {itemCount}
          {' '}
          {itemCount === 1 ? 'item' : 'items'}
        </span>
        {' '}
        {items.length > 0 &&
          <span className="summary-total">
            (${itemTotal.toFixed(2)})
          </span>
        }
      </div>
    </nav>
  );
}
Nav.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default Nav;
