import ReactDOM from 'react-dom';
jest.mock('react-dom', () => ({ render: jest.fn() }));
global.document.querySelector = () => {};

import { GenreCloud, genres } from './index';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders', () => {
  const tree = renderer.create(<GenreCloud genres={genres} />).toJSON();
  expect(tree).toMatchSnapshot();
});
