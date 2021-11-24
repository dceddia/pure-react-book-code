import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const StoryList = ({ stories }) => (
  <ol className="stories" start={1}>
    {stories.map((story, index) =>
      <li key={story.id}>
        <Story story={story}/>
      </li>
    )}
  </ol>
);

StoryList.propTypes = {
  stories: PropTypes.array.isRequired
};

export default StoryList;
