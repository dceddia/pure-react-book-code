jest.mock('moment');
jest.mock('react-dom', () => ({render: jest.fn()}))

import React from 'react';
import { FileList, testFiles } from './index';
import renderer from 'react-test-renderer';
import moment from 'moment';

moment.mockImplementation(t => ({
  fromNow: () => "10 months ago"
}));

it('renders', () => {
  const tree = renderer.create(
    <FileList files={testFiles} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
