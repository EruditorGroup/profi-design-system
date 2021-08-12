import {act, renderHook, RenderResult, cleanup} from '@testing-library/react-hooks';
import {Dispatch, SetStateAction} from 'react';
import useStateSafe from '../useStateSafe';

jest.unmock('../useStateSafe');

const getSetState = <TState>(
  result: RenderResult<[TState, Dispatch<SetStateAction<TState>>]>
) => (newValue: SetStateAction<TState>) => result.current[1](newValue);

describe('useStateSafe', () => {
  it('should be defined', () => {
    expect(useStateSafe).toBeDefined();
  });

  it('should have initial state', () => {
    const {result} = renderHook(() => useStateSafe(5));

    expect(result.current[0]).toBe(5);
  });

  it('setState should persist through rerenderes', () => {
    const {result} = renderHook(() => useStateSafe(5));
    const initialSetState = result.current[1];

    act(() => {
        getSetState(result)(6);
    });
    act(() => {
        getSetState(result)(7);
    });

    expect(initialSetState).toEqual(result.current[1]);
  });

  it('should change state', () => {
    const {result} = renderHook(() => useStateSafe(5));
    const setState = getSetState(result);
    act(() => {
        setState(6);
    });

    expect(result.current[0]).toBe(6);
  });

  it('should change state via callback', () => {
    const {result} = renderHook(() => useStateSafe({foo: 5, bar: 'test'}));
    const setState = getSetState(result);

    act(() => {
        setState(state => ({...state, bar: 'newTest'}));
    });

    expect(result.current[0].bar).toBe('newTest');
  });

  it('should not change state when hook is unmounted', () => {
    const {result} = renderHook(() => useStateSafe(5));
    cleanup();

    act(() => {
        getSetState(result)(7);
    });
    expect(result.current[0]).toBe(5);
  });
});
