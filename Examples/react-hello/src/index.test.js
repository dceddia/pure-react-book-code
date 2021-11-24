jest.mock('react-dom', () => ({render: jest.fn()}))

import React from 'react';
import { HelloWorld } from './index';
import renderer from 'react-test-renderer';

it('renders', () => {
  const tree = renderer.create(
    <HelloWorld/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
