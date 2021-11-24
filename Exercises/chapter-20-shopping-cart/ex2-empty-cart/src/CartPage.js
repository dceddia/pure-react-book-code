import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

const EmptyCart = () => (
  <div className="CartPage-empty">
    Your cart is empty.
    <br/>
    Why not add some expensive products to it?
  </div>
);

function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    items.length === 0 ? <EmptyCart/> :
    <ul className="CartPage-items">
      {items.map(item =>
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                className="CartItem-removeOne"
                onClick={() => onRemoveOne(item)}>&ndash;</button>
              <span className="CartItem-count">{item.count}</span>
              <button
                className="CartItem-addOne"
                onClick={() => onAddOne(item)}>+</button>
            </div>
          </Item>
        </li>
      )}
    </ul>
  );
}
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;

