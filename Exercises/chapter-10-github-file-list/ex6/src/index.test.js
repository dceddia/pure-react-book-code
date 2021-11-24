import ReactDOM from 'react-dom';
jest.mock('react-dom', () => ({ render: jest.fn() }));
global.document.querySelector = () => {};

import { PinterestBoard, cards } from './index';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders', () => {
  const tree = renderer.create(<PinterestBoard cards={cards} />).toJSON();
  expect(tree).toMatchSnapshot();
});
