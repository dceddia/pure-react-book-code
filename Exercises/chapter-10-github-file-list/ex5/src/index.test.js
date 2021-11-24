import ReactDOM from 'react-dom';
jest.mock('react-dom', () => ({ render: jest.fn() }));
global.document.querySelector = () => {};

import { StoryList, stories } from './index';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders', () => {
  const tree = renderer.create(<StoryList stories={stories} />).toJSON();
  expect(tree).toMatchSnapshot();
});
