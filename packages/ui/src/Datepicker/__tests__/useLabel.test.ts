import {act, renderHook} from '@testing-library/react-hooks';
import {getReadableDate} from '@eruditorgroup/profi-toolkit';
import {useLabel} from '../hooks/useLabel';

jest.unmock('../hooks/useLabel');
jest.unmock('@eruditorgroup/profi-toolkit');

const isToday = (date: Date) =>
  new Date().toDateString() === date.toDateString();

describe('useControllableState', () => {
  it('should use first fit transformation', () => {
    const {result} = renderHook(() =>
      useLabel(new Date(), [
        (date) => (isToday(date) ? 'Сегодня дубль' : null),
        (date) => (isToday(date) ? 'Сегодня' : null),
      ]),
    );
    const label = result.current;
    expect(label).toBe('Сегодня');
  });

  it('should apply default transofrmation in case nothing custom was not passed', () => {
    const date = new Date();
    const {result} = renderHook(() => useLabel(date, []));
    
    expect(result.current).toBe(getReadableDate(date, {
      withWeekday: true,
      withYear: true,
      omitYearIfThisYear: true,
    }));
  });
});
