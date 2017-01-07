import React from 'react';
import { mount, shallow } from 'enzyme';
import LiquidChart from '../../src/Charts/Liquid';
import Chart from '../../src/Components/Common/Chart';
import ReactIf from '../../src/Components/Common/ReactIf';
import Gradient from '../../src/Components/Defs/Gradients';
import { Clip, Liquid, LiquidText, Shape } from '../../src/Components/LiquidChart/';

describe('<Liquid />', () => {
  it('should render', () => {
    const G = () => <g />;
    const wrapper = mount(
      <Chart
        width={400}
        height={400}
      >
        <Liquid
          value={23}
        >
          <LiquidText />
          <Shape />
          <Clip />
        </Liquid>
      </Chart>,
    );
    expect(wrapper.find(Chart).length).toBe(1);
    wrapper.update();
    expect(wrapper.find('svg').length).toBe(1);
    expect(wrapper.find('text').length).toBe(2);
  });
});
