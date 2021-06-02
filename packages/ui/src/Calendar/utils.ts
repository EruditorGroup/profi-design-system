import {
  chunkArray,
  isDateEqual,
  isBeforeDate,
  isAfterDate,
  DAYS_IN_WEEK,
  MONTH_NAMES,
} from '@eruditorgroup/profi-toolkit';

export type DayInfo = {
  label: number | null;
  date: Date;
  disabled?: boolean;
  selected?: boolean;
  isToday?: boolean;
};

export type MonthInfo = {
  firstDayOfMonth: number;
  lastDayOfMonth: number;
  daysInMonth: number;
  year: number;
  monthName: string;
  monthNumber: number;
};

export const getMonthInfo = (date: Date): MonthInfo => {
  const firstDate = new Date(new Date(date).setDate(1));
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const monthNumber = date.getMonth();

  return {
    firstDayOfMonth: firstDate.getDay() || DAYS_IN_WEEK,
    lastDayOfMonth: lastDate.getDay() || DAYS_IN_WEEK,
    daysInMonth: lastDate.getDate(),
    year: date.getFullYear(),
    monthName: MONTH_NAMES[monthNumber],
    monthNumber,
  };
};

export const isNavigationDisabled = (
  month: MonthInfo,
  {minDate, maxDate}: {minDate?: Date; maxDate?: Date},
): [boolean, boolean] => {
  return [
    minDate
      ? !isBeforeDate(minDate, new Date(month.year, month.monthNumber, 1))
      : false,
    maxDate
      ? !isAfterDate(maxDate, new Date(month.year, month.monthNumber + 1, 0))
      : false,
  ];
};

export const composeDays = (
  month: MonthInfo,
  minDate?: Date,
  maxDate?: Date,
): ReadonlyArray<ReadonlyArray<DayInfo>> => {
  const TODAY = new Date();
  let days: DayInfo[] = [];

  if (month.firstDayOfMonth !== 1) {
    days = days.concat(
      Array.from({length: month.firstDayOfMonth - 1}, (_, i) => {
        const date = new Date(
          month.year,
          month.monthNumber,
          -(month.firstDayOfMonth - 1) + (i + 1),
        );
        return {
          label: null,
          date,
          disabled: true,
        };
      }),
    );
  }

  days = days.concat(
    Array.from({length: month.daysInMonth}, (_, i) => {
      const date = new Date(month.year, month.monthNumber, i + 1);
      return {
        label: date.getDate(),
        date,
        disabled:
          (minDate && isBeforeDate(date, minDate)) ||
          (maxDate && isAfterDate(date, maxDate)),
        isToday: isDateEqual(TODAY, date),
      };
    }),
  );

  if (month.lastDayOfMonth !== DAYS_IN_WEEK) {
    days = days.concat(
      Array.from({length: DAYS_IN_WEEK - month.lastDayOfMonth}, (_, i) => {
        const date = new Date(
          month.year,
          month.monthNumber,
          month.daysInMonth + 1 + i,
        );
        return {
          label: null,
          date,
          disabled: true,
        };
      }),
    );
  }

  return chunkArray(days, DAYS_IN_WEEK);
};

export const markSelectedDays = (
  weeks: ReadonlyArray<ReadonlyArray<DayInfo>>,
  selectedDays: ReadonlyArray<Date>,
): ReadonlyArray<ReadonlyArray<DayInfo>> =>
  weeks.map((week) =>
    week.map((day) => ({
      ...day,
      selected: selectedDays.some((s) => isDateEqual(s, day.date)),
    })),
  );
