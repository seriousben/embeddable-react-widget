import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(document, 'readyState', {
  val: 'complete',
  get() { return this.val; },
  set(s) { this.val = s; },
});
