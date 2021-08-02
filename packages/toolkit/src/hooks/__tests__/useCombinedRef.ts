import {act, renderHook} from '@testing-library/react-hooks';
import {useRef} from 'react';
import useCombinedRef from '../useCombinedRef';

jest.unmock('../useCombinedRef');
jest.useRealTimers();

describe('useCombinedRef', () => {
  it('should be defined', () => {
    expect(useCombinedRef).toBeDefined();
  });

  it('should combine object-ref ', () => {
    let ref, setRef;
    let localRef = {current: null};

    renderHook(() => {
      const [_ref, _setRef] = useCombinedRef(localRef);
      ref = _ref;
      setRef = _setRef;
    });

    setRef(556677);

    expect(ref.current).toBe(556677);
    expect(localRef.current).toBe(556677);
  });

  it('should combine function-ref ', () => {
    let ref, setRef;

    let localValue = null;
    let localRef = (value) => (localValue = value);

    renderHook(() => {
      const [_ref, _setRef] = useCombinedRef(localRef);
      ref = _ref;
      setRef = _setRef;
    });

    setRef(556677);

    expect(ref.current).toBe(556677);
    expect(localValue).toBe(556677);
  });
});
