import {act, renderHook} from '@testing-library/react-hooks';
import useThrottledCallback from '../useThrottledCallback';

jest.unmock('../useThrottledCallback');
jest.useRealTimers();

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe('useThrottledCallback', () => {
  it('should be defined', () => {
    expect(useThrottledCallback).toBeDefined();
  });

  it('should call origin functions with arguments ', async () => {
    let calls = {times: 0};
    let throttledFn;

    renderHook(() => {
      throttledFn = useThrottledCallback((ref) => (ref.times += 1), 300, []);
    });

    throttledFn(calls);
    expect(calls.times).toBe(1);

    throttledFn(calls);
    await waitFor(350);
    expect(calls.times).toBe(2);
  });

  it('should be throttled (leading = true, trailing = true)', async () => {
    let timesCalled = 0;
    let throttledFn;

    renderHook(() => {
      throttledFn = useThrottledCallback(() => (timesCalled += 1), 300, [
        timesCalled,
      ]);
    });

    throttledFn(timesCalled);
    expect(timesCalled).toBe(1); // leading: true
    await waitFor(50);
    expect(timesCalled).toBe(1);
    throttledFn(timesCalled); // skip
    await waitFor(150);
    expect(timesCalled).toBe(1);
    throttledFn(timesCalled); // pass : > 300
    await waitFor(250);
    expect(timesCalled).toBe(2);
    throttledFn(timesCalled); // skip
    await waitFor(50);
    expect(timesCalled).toBe(2);
    throttledFn(timesCalled); // skip
    throttledFn(timesCalled); // skip
    await waitFor(50);
    expect(timesCalled).toBe(2);

    throttledFn(timesCalled); // pass : > 300
    await waitFor(350);
    expect(timesCalled).toBe(3);

    throttledFn(timesCalled); // pass : > 300
    await waitFor(350);
    expect(timesCalled).toBe(4);
  });

  it('should be throttled (leading = false, trailing = true)', async () => {
    let timesCalled = 0;
    let throttledFn;

    renderHook(() => {
      throttledFn = useThrottledCallback(
        () => (timesCalled += 1),
        300,
        [timesCalled],
        {leading: false, trailing: true},
      );
    });

    throttledFn(timesCalled); // skip
    expect(timesCalled).toBe(0); // leading: false
    await waitFor(50);
    expect(timesCalled).toBe(0);
    throttledFn(timesCalled); // skip
    await waitFor(150);
    expect(timesCalled).toBe(0);
    throttledFn(timesCalled); // pass : > 300
    await waitFor(250);
    expect(timesCalled).toBe(1);
    throttledFn(timesCalled); // skip
    await waitFor(50);
    expect(timesCalled).toBe(1);
    throttledFn(timesCalled); // skip
    throttledFn(timesCalled); // skip
    await waitFor(50);
    expect(timesCalled).toBe(1);
    throttledFn(timesCalled); // pass : > 300
    await waitFor(350);
    expect(timesCalled).toBe(2);

    throttledFn(timesCalled); // pass : > 300
    await waitFor(350);
    expect(timesCalled).toBe(2);
  });

  it('should be throttled (leading = true, trailing = false)', async () => {
    let timesCalled = 0;
    let throttledFn;

    renderHook(() => {
      throttledFn = useThrottledCallback(
        () => (timesCalled += 1),
        300,
        [timesCalled],
        {leading: true, trailing: false},
      );
    });

    throttledFn(timesCalled);
    expect(timesCalled).toBe(1); // leading: true
    await waitFor(50);
    expect(timesCalled).toBe(1);
    throttledFn(timesCalled); // skip
    await waitFor(150);
    expect(timesCalled).toBe(1);
    throttledFn(timesCalled);
    await waitFor(250);
    expect(timesCalled).toBe(1);
    throttledFn(timesCalled); // pass : > 300
    await waitFor(50);
    expect(timesCalled).toBe(2);
    throttledFn(timesCalled); // skip
    throttledFn(timesCalled); // skip
    await waitFor(50);
    expect(timesCalled).toBe(2);
    throttledFn(timesCalled);
    await waitFor(350);
    expect(timesCalled).toBe(2);

    throttledFn(timesCalled); // pass : > 300
    await waitFor(350);
    expect(timesCalled).toBe(3);
  });

  it('should be cleaned after unmount ', async () => {
    let timesCalled = 0;
    let debouncedFn;

    const hook = renderHook(() => {
      debouncedFn = useThrottledCallback(() => (timesCalled += 1), 300, [
        timesCalled,
      ]);
    });

    debouncedFn(timesCalled);
    expect(timesCalled).toBe(1); // leading: true
    await waitFor(50);
    hook.unmount();
    await waitFor(350);
    expect(timesCalled).toBe(1);
  });
});
