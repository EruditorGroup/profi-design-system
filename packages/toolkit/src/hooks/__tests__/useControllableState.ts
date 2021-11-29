import {act, renderHook} from '@testing-library/react-hooks';
import useControllableState from '../useControllableState';

jest.unmock('../useControllableState');

describe('useControllableState', () => {
  it('should be uncontrolled when defaultValue is passed', () => {
    const {result} = renderHook(() =>
      useControllableState({defaultValue: 'test'}),
    );
    const [value] = result.current;
    expect(value).toBe('test');

    act(() => {
      const [, setValue] = result.current;
      setValue('next-state');
    });

    const [next] = result.current;
    expect(next).toBe('next-state');
  });

  it('should be controlled when value is passed', () => {
    const {result} = renderHook(() => useControllableState({value: 'test'}));
    const [value] = result.current;
    expect(value).toBe('test');

    act(() => {
      const [, setValue] = result.current;
      setValue('next-test');
    });

    const [next] = result.current;
    expect(next).toBe('test');
  });

  it('should not change state when results of shouldUpdate is false', () => {
    const {result} = renderHook(() =>
      useControllableState({
        defaultValue: 'test',
        shouldUpdate: (prev, next) => next !== 'not',
      }),
    );

    act(() => {
      const [, setValue] = result.current;
      setValue('not');
    });

    const [next] = result.current;
    expect(next).toBe('test');
  });
});
