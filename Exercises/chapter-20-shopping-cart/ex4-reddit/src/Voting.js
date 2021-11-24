import React from 'react';
import PropTypes from 'prop-types';

const Voting = ({ post, onUpvote, onDownvote }) => (
  <div className="voting">
    <i className="fa fa-arrow-up" onClick={onUpvote}/>
    <div className="score">{post.score}</div>
    <i className="fa fa-arrow-down" onClick={onDownvote}/>
  </div>
);
Voting.propTypes = {
  post: PropTypes.object.isRequired,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired
};

export default Voting;
