import ReactDOM from 'react-dom';
jest.mock('react-dom', () => ({ render: jest.fn() }));
global.document.querySelector = () => {};

import { Board, board } from './index';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders', () => {
  const tree = renderer.create(<Board board={board} />).toJSON();
  expect(tree).toMatchSnapshot();
});
