import {act, renderHook} from '@testing-library/react-hooks';
import useDebouncedCallback from '../useDebouncedCallback';

jest.unmock('../useDebouncedCallback');
jest.useRealTimers();

const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe('useDebouncedCallback', () => {
  it('should be defined', () => {
    expect(useDebouncedCallback).toBeDefined();
  });

  it('should call origin functions with arguments ', async () => {
    let calls = {times: 0};
    let debouncedFn;

    renderHook(() => {
      debouncedFn = useDebouncedCallback((ref) => (ref.times += 1), 300, []);
    });

    debouncedFn(calls);
    expect(calls.times).toBe(0);
    await waitFor(350);
    expect(calls.times).toBe(1);
  });

  it('should be debounced ', async () => {
    let timesCalled = 0;
    let debouncedFn;

    renderHook(() => {
      debouncedFn = useDebouncedCallback(() => (timesCalled += 1), 300, [
        timesCalled,
      ]);
    });

    debouncedFn(timesCalled); // skip
    await waitFor(50);
    expect(timesCalled).toBe(0);
    debouncedFn(timesCalled); // skip
    await waitFor(150);
    expect(timesCalled).toBe(0);
    debouncedFn(timesCalled); // skip
    await waitFor(250);
    expect(timesCalled).toBe(0);
    debouncedFn(timesCalled); // skip
    await waitFor(50);
    expect(timesCalled).toBe(0);
    debouncedFn(timesCalled); // skip
    debouncedFn(timesCalled); // skip
    await waitFor(50);
    expect(timesCalled).toBe(0);

    debouncedFn(timesCalled); // pass : > 300
    await waitFor(350);
    debouncedFn(timesCalled); // pass : > 300
    await waitFor(350);

    expect(timesCalled).toBe(2);
  });
});
