import React from 'react';
import PropTypes from 'prop-types';
import RedditPost from './RedditPost';

const RedditListing = ({ posts, onUpvote, onDownvote }) => (
  <ul className="reddit-listing">
    {posts
      .sort((p1, p2) => p2.score - p1.score)
      .map(post =>
        <li key={post.id}>
          <RedditPost post={post}
            onUpvote={onUpvote}
            onDownvote={onDownvote} />
        </li>
    )}
  </ul>
)

RedditListing.propTypes = {
  posts: PropTypes.array.isRequired,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired
};

export default RedditListing;

