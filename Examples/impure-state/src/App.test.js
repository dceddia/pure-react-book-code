import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('immutably adds items to state', () => {
  Math.random = (() => {
    let count = 0;
    return () => count++;
  })();

  const { getByText, getByTestId } = render(<App />);
  let el = getByText('Add item immutably (good)');
  let list = getByTestId('list');
  expect(list.querySelectorAll('li').length).toBe(0);
  el.click();
  expect(list.querySelectorAll('li').length).toBe(1);
  el.click();
  expect(list.querySelectorAll('li').length).toBe(2);
});

it('mutably adds items to state but does not re-render', () => {
  const { getByText, getByTestId } = render(<App />);
  let el = getByText('Add item mutably (bad)');
  let list = getByTestId('list');
  expect(list.querySelectorAll('li').length).toBe(0);
  el.click();
  expect(list.querySelectorAll('li').length).toBe(0);
  el.click();
  expect(list.querySelectorAll('li').length).toBe(0);
});

it('renders after an immutable add', () => {
  const { getByText, getByTestId } = render(<App />);

  let list = getByTestId('list');

  getByText('Add item mutably (bad)').click();
  expect(list.querySelectorAll('li').length).toBe(0);
  getByText('Add item immutably (good)').click();
  expect(list.querySelectorAll('li').length).toBe(2);
});
