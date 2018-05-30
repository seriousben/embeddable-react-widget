import React from 'react';
import { shallow } from 'enzyme';
import Widget from './widget';

test('simple test', () => {
  const widgetDom = shallow(<Widget />);
  console.log(widgetDom.html());
  expect(widgetDom.find('.docked-widget').exists()).toBe(true);
});
