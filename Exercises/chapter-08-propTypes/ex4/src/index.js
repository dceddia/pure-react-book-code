import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Poster({ posterInfo }) {
  var { image, title, caption } = posterInfo;

  return (
    <div className="poster">
      <div className="image-container">
        <img alt="Poster" src={image}/>
      </div>
      <div className="title">
        <span className="first-letter">
          {title.substring(0,1)}
        </span>
        <span className="center">
          {title.substring(1, title.length - 1)}
        </span>
        <span className="last-letter">
          {title.substring(title.length - 1)}
        </span>
      </div>
      <div className="caption">{caption}</div>
    </div>
  );
}
Poster.propTypes = {
  posterInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
  }).isRequired
};

var posterInfo = {
  image: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
  title: "React",
  caption: "The best thing since jQuery, probably."
};

ReactDOM.render(
  <Poster posterInfo={posterInfo}/>,
  document.getElementById('root')
);
