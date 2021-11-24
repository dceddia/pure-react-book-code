jest.mock('moment');

import React from 'react';
import Time from './Time';
import renderer from 'react-test-renderer';
import moment from 'moment';

moment.mockImplementation(t => ({
  fromNow: () => "a minute ago"
}));

it('renders', () => {
  const tree = renderer.create(
    <Time time='2017-05-13T01:07:47.198Z'/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
