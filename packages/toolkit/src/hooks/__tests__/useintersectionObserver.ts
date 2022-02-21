import {renderHook} from '@testing-library/react-hooks';
import useIntersectionObserver from '../useIntersectionObserver';

describe('useIntersectionObserver', () => {
  let OldIntersectionObserver: typeof IntersectionObserver | null = null;
  let mockObserver;
  beforeEach(() => {
    OldIntersectionObserver = window.IntersectionObserver;
    // @ts-ignore Удаляем свойство, но затем вернем
    delete window.IntersectionObserver;
  });

  afterEach(() => {
    // @ts-ignore Добавляем обратно, значение точно не null
    window.IntersectionObserver = OldIntersectionObserver;
  });

  it('Возвращает IntersectionObserver если есть поддержка', async () => {
    const Mock = jest.fn();
    window.IntersectionObserver = Mock;
    const {result} = renderHook(() => useIntersectionObserver());

    expect(result.current).toEqual(Mock);
  });

  it('Возвращает полифилл если поддержки нет', async () => {
    const Mock = jest.fn();

    jest.doMock('intersection-observer', () => {
      window.IntersectionObserver = Mock;
    });

    const {result, waitForValueToChange} = renderHook(() =>
      useIntersectionObserver(),
    );

    await waitForValueToChange(() => result.current);

    expect(result.current).toEqual(Mock);
  });
});
