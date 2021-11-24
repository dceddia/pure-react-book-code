import React from 'react';
import ReactDOM from 'react-dom';
import { stories } from './static-data';

import StoryList from './StoryList';
import './index.css';

// Real data can be fetched from the Hacker News API!
// See here if you want to play around: https://github.com/HackerNews/API
// The data in 'static-data.js' is actual story data

ReactDOM.render(
  <StoryList stories={stories} />,
  document.querySelector('#root')
);

export { StoryList, stories };
