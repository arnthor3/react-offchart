import React from 'react';
import { mount, shallow } from 'enzyme';
import Gradient from '../src/Components/Defs/Gradients';

describe('<Gradient />', () => {
  it('should render', () => {
    const wrapper = mount(
      <Gradient type={1}>
        <stop />
        <stop />
        <stop />
      </Gradient>,
    );
    expect(wrapper.find('defs').length).toBe(1);
    expect(wrapper.find('linearGradient').length).toBe(1);
    expect(wrapper.find('stop').length).toBe(3);
  });
});
