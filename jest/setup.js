import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(document, 'readyState', {
  value: 'complete',
  writable: true,
  enumerable: true,
  configurable: true,
});
