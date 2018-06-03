import './bookmarklet';
import ReactDOM from 'react-dom';

describe('bookmarklet', () => {
  afterEach(() => {
    const el = document.querySelectorAll('body > div');
    ReactDOM.unmountComponentAtNode(el[0]);
    el[0].parentNode.removeChild(el[0]);
  });

  test('#mount document becomes ready', async () => {
    const el = document.querySelectorAll('body > div');
    expect(el).toHaveLength(1);
  });
});
