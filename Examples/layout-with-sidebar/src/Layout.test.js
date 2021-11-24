import React from 'react';
import Layout from './Layout';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders properly', () => {
  const wrapper = mount(<Layout/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders the sidebar', () => {
  const wrapper = mount(<Layout/>);
  wrapper.find('.content button').simulate('click');
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('hides the sidebar', () => {
  const wrapper = mount(<Layout/>);
  wrapper.find('.content button').simulate('click');
  wrapper.find('.sidebar button').simulate('click');
  expect(toJson(wrapper)).toMatchSnapshot();
});
