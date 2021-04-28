import {useRef} from 'react';
import useWatcher from '../useWatcher';

jest.mock('react', () => ({
  useRef: jest.fn(),
}));
jest.unmock('../useWatcher');

it('useWatcher', () => {
  const deps = [1, 2, 3];
  const newDeps = [1, 3, 4];
  const ref = {current: deps};
  useRef.mockImplementation(() => ref);
  const cb = jest.fn();

  useWatcher(cb, newDeps);

  expect(cb).toBeCalled();
  expect(ref.current).toEqual(newDeps);
});
