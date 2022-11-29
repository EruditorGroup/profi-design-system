import {renderHook} from '@testing-library/react-hooks';
import useUpdateEffect from '../useUpdateEffect';

jest.unmock('../useUpdateEffect');

describe('useUpdateEffect', () => {

  it('correct flow without deps', () => {
    const effectMock = jest.fn();

    const {rerender} = renderHook(() => {
      useUpdateEffect(effectMock);
    });

    expect(effectMock).not.toBeCalled(); // При первом рендере эффект не срабатывает
    rerender();
    expect(effectMock).toBeCalled(); // При втором рендере эффект срабатывает, т.к. без зависимостей эффект выполняется каждый раз
  });

  it('correct flow with the same deps between renders', () => {
    const effectMock = jest.fn();
    let deps = [1];

    const {rerender} = renderHook(() => {
      useUpdateEffect(effectMock, deps);
    });

    expect(effectMock).not.toBeCalled(); // При первом рендере эффект не срабатывает
    deps = [1]; // Перезаписываем deps тем же значением
    rerender();
    expect(effectMock).not.toBeCalled(); // При втором рендере эффект не срабатывает, т.к. зависимости не поменялись
  });

  it('correct flow with different deps between renders', () => {
    const effectMock = jest.fn();
    let deps = [1];

    const {rerender} = renderHook(() => {
      useUpdateEffect(effectMock, deps);
    });

    expect(effectMock).not.toBeCalled(); // При первом рендере эффект не срабатывает
    deps = [2]; // Перезаписываем deps другим значением
    rerender();
    expect(effectMock).toBeCalled(); // При втором рендере эффект срабатывает, т.к. зависимости поменялись
  });
});
