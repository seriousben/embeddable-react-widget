import React from 'react';
import { mount } from 'enzyme';
import Widget from './widget';
import { waitForSelection } from '../test-helpers';

describe('<Widget />', () => {
  test('open/close', async () => {
    const widgetDom = mount(<Widget />);
    expect(widgetDom).toMatchSnapshot();

    {
      const dockAnchorEl = widgetDom.find('a.dock');
      expect(dockAnchorEl).toHaveLength(1);
      // open widget
      dockAnchorEl.simulate('click');
    }

    expect(widgetDom).toMatchSnapshot();

    // dock does not exist anymore
    expect(widgetDom.find('a.dock')).toHaveLength(0);

    const closeAnchorEl = await waitForSelection(widgetDom, 'a.widget-header-icon');

    expect(closeAnchorEl).toHaveLength(1);
    // close widget
    closeAnchorEl.simulate('click');

    {
      const dockAnchorEl = await waitForSelection(widgetDom, 'a.dock');
     expect(dockAnchorEl).toHaveLength(1);
    }

    expect(widgetDom).toMatchSnapshot();
  });

});
