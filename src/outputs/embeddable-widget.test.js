import EmbeddableWidget from './embeddable-widget';
import { waitForSelection } from '../test-helpers';

describe('EmbeddableWidget', () => {
  afterEach(() => {
    document.readyState = 'complete';
    if (EmbeddableWidget.el) {
      EmbeddableWidget.unmount();
    }
  });

  test('#mount document becomes ready', async () => {
    document.readyState = 'loading';
    EmbeddableWidget.mount();
    window.dispatchEvent(new Event('load', {}));
    await waitForSelection(document, 'div');
  });

  test('#mount document complete', async () => {
    EmbeddableWidget.mount();
    await waitForSelection(document, 'div');
  });

  test('#mount to document element', async () => {
    const newElement = document.createElement('span');
    newElement.setAttribute('id', 'widget-mount');
    document.body.appendChild(newElement);

    EmbeddableWidget.mount({
      parentElement: '#widget-mount',
    });

    await waitForSelection(document, 'div');

    expect(document.querySelectorAll('#widget-mount')).toHaveLength(1);
  });

  test('#mount twice', async () => {
    EmbeddableWidget.mount();
    expect(() => EmbeddableWidget.mount()).toThrow('already mounted');
  });

  test('#unmount', async () => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    expect(document.querySelectorAll('div')).toHaveLength(1);

    EmbeddableWidget.el = el;
    EmbeddableWidget.unmount();

    expect(document.querySelectorAll('div')).toHaveLength(0);
  });

  test('#unmount without mounting', async () => {
    expect(() => EmbeddableWidget.unmount()).toThrow('not mounted');
  });
});
