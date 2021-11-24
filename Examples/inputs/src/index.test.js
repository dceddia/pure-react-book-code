jest.mock('react-dom', () => ({render: jest.fn()}))

import React from 'react';
import { Demo } from './index';
import renderer from 'react-test-renderer';

it('renders', () => {
  const tree = renderer.create(
    <Demo/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
