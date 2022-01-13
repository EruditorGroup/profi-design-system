import useKeyPress from '../useKeyPress';
import {renderHook} from '@testing-library/react-hooks';
import {ESC} from '../../constants/keyCodes';

jest.mock('../usePersistCallback', () => (fn) => fn);

jest.unmock('../useKeyPress');
jest.unmock('../../constants/keyCodes');

describe('useKeyPress', () => {
  it('subscribe', () => {
    const callback = jest.fn();

    window.addEventListener = jest.fn();
    renderHook(() => useKeyPress(ESC, callback));
    expect(callback).not.toBeCalled();

    const lastEvents = window.addEventListener.mock.calls.filter(
      ([event]) => event === 'keydown',
    );

    expect(lastEvents).toHaveLength(1);
  });

  it('unsubscribe', () => {
    const callback = jest.fn();
    const hook = renderHook(() => useKeyPress(ESC, callback));
    window.removeEventListener = jest.fn();
    hook.unmount();

    const lastEvents = window.removeEventListener.mock.calls.filter(
      ([event]) => event === 'keydown',
    );

    expect(lastEvents).toHaveLength(1);
  });

  it('event fire', () => {
    const evCollection = [];
    window.addEventListener = jest.fn((key, fn) => {
      evCollection[key] = fn;
    });

    const escapeCallback = jest.fn();
    renderHook(() => useKeyPress(ESC, escapeCallback));
    expect(evCollection.keydown).toMatchSnapshot();

    evCollection.keydown(new KeyboardEvent('keydown', {key: ESC}));

    expect(escapeCallback).toBeCalled();
  });

  it('event fire when key = keyName', () => {
    const evCollection = [];
    window.addEventListener = jest.fn((key, fn) => {
      evCollection[key] = fn;
    });

    const escapeCallback = jest.fn();
    renderHook(() => useKeyPress(ESC, escapeCallback));
    expect(evCollection.keydown).toMatchSnapshot();

    evCollection.keydown(
      new KeyboardEvent('keydown', {key: 'Escape', keyCode: ESC}),
    );

    expect(escapeCallback).toBeCalled();
  });
});
