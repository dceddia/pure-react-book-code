jest.mock('react-dom', () => ({render: jest.fn()}))

import React from 'react';
import { Tweet, testTweet } from './index';
import renderer from 'react-test-renderer';

it('renders', () => {
  const tree = renderer.create(
    <Tweet tweet={testTweet}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
