import ReactDOM from 'react-dom';
import bookmarklet from './bookmarklet';

describe('bookmarklet', () => {
  afterEach(() => {
    const el = document.querySelectorAll('body > div');
    ReactDOM.unmountComponentAtNode(el[0]);
    el[0].parentNode.removeChild(el[0]);
    window.EmbeddableWidget = null;
  });

  test('#mount document becomes ready', async () => {
    expect(window.EmbeddableWidget).not.toBeNull();
    bookmarklet();
    const el = document.querySelectorAll('body > div');
    expect(el).toHaveLength(1);
  });
});
