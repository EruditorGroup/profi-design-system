// yarn test src/client/hooks/__tests__/useRelativePosition.js
import {act, renderHook} from '@testing-library/react-hooks';
import useRelativePosition from '../useRelativePosition';

jest.unmock('../useRelativePosition');

describe('useRelativePosition', () => {
  let element;
  let expectedResult;
  beforeEach(() => {
    element = {
      getBoundingClientRect: jest.fn(() => ({
        top: 20,
        height: 40,
        left: 50,
        width: 70,
      })),
    };

    expectedResult = {
      left: '50px',
      minWidth: '70px',
      position: 'fixed',
      top: '60px',
      zIndex: 10000000,
    };
  });

  it('should be defined', () => {
    expect(useRelativePosition).toBeDefined();
  });

  it('', () => {
    let hook = renderHook(() => useRelativePosition());
    expect(hook.result.current).toBe(undefined);
  });

  it('should use getBoundingClientRect to calculate styles', () => {
    const hook = renderHook(() => useRelativePosition(element));
    expect(hook.result.current).toEqual(expectedResult);
  });
});
