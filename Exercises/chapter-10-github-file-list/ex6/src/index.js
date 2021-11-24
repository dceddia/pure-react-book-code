import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

const PinterestCard = ({
  card: { title, pins, mainImg, subImg1, subImg2 }
}) => (
  <div className="card">
    <div className="images">
      <img className="main" alt={title} src={mainImg} />
      <img className="sub1" alt="preview 1" src={subImg1} />
      <img className="sub2" alt="preview 2" src={subImg2} />
    </div>
    <div className="summary">
      <h3 className="title">{title}</h3>
      <div className="pin-count">
        <strong>{pins}</strong> Pins
      </div>
    </div>
    <button className="follow-btn">Follow</button>
  </div>
);
PinterestCard.propTypes = {
  card: PropTypes.object.isRequired
};

const PinterestBoard = ({ cards }) => (
  <ul className="board">
    {cards.map(card => (
      <li key={card.id}>
        <PinterestCard card={card} />
      </li>
    ))}
  </ul>
);
PinterestBoard.propTypes = {
  cards: PropTypes.array.isRequired
};

let cards = [
  {
    id: 1,
    title: 'AVIATION',
    pins: 641,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  },
  {
    id: 2,
    title: 'Exceptional Aviation',
    pins: 209,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  },
  {
    id: 3,
    title: 'Aerospace',
    pins: 1545,
    mainImg: require('./img/787.jpg'),
    subImg1: require('./img/sub1.jpg'),
    subImg2: require('./img/sub2.jpg')
  }
];

ReactDOM.render(
  <PinterestBoard cards={cards} />,
  document.querySelector('#root')
);

export { PinterestBoard, cards };
