import {MONTH_NAMES_DECLENSED, WEEKDAY_SHORTNAMES} from '../constants';

/**
 * Проверяет объект date на валидность
 * @param {Date} date дата для проверки
 * @returns { boolean } boolean
 */
export const isValidDate = (date: Date): boolean =>
  date instanceof Date && !isNaN(date.getTime());

/**
 * Сдвигает дату на n дней
 * @param {Date} date дата для конверсии
 * @param {number} shiftBy количество дней для сдвига
 * @returns { Date } модифицированная дата
 */
export const shiftDate = (date: Date, shiftBy: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + shiftBy);

/**
 * Сдвигает дату на n месяцев
 * @param {Date} date дата для конверсии
 * @param {number} shiftBy количество месяцев для сдвига
 * @returns { Date } модифицированная дата
 */
export const shiftMonth = (date: Date, shiftBy: number): Date =>
  new Date(date.getFullYear(), date.getMonth() + shiftBy, date.getDate());

/**
 * Конструирует ISO строку даты с игнорированием смещения по таймзоне
 * т.е. Tue Jun 1 2021 01:23:45 GMT+0300 (MSK) будет собрано в строку 2021-06-01
 * несмотря на то, что в UTC+0 времени это 31 мая
 * @param {string} date дата для конверсии
 * @returns { string } YYYY-MM-DD calendar date (ISO 8601)
 */
export const getDateString = (date: Date): string => {
  if (!isValidDate(date)) return '';

  const dtDate = `0${date.getDate()}`.slice(-2);
  const dtMonth = `0${date.getMonth() + 1}`.slice(-2);
  return `${date.getFullYear()}-${dtMonth}-${dtDate}`;
};

/**
 * Проверяет соответствие дат, игнорируя временную часть
 * @param {Date} target дата, которая сравнивается
 * @param {Date} compareWith дата, с которой производится сравнение
 * @returns { boolean }
 */
export const isDateEqual = (target: Date, compareWith: Date): boolean =>
  target.getDate() === compareWith.getDate() &&
  target.getMonth() === compareWith.getMonth() &&
  target.getFullYear() === compareWith.getFullYear();

/**
 * Сравнивает даты, игнорируя временную часть
 * @param {Date} dt1 дата, которая сравнивается
 * @param {Date} dt2 дата, с которой производится сравнение
 * @returns { 0 | 1 | -1 } результат сравнения в формате comparerResult
 */
export const compareDates = (dt1: Date, dt2: Date): 0 | 1 | -1 => {
  const diff =
    dt1.getFullYear() - dt2.getFullYear() ||
    dt1.getMonth() - dt2.getMonth() ||
    dt1.getDate() - dt2.getDate();
  return diff > 0 ? 1 : diff < 0 ? -1 : 0;
};

/**
 * Сравнивает даты, игнорируя временную часть
 * @param {Date} target дата, которая сравнивается
 * @param {Date} compareWith дата, с которой производится сравнение
 * @returns { boolean }
 */
export const isBeforeDate = (target: Date, compareWith: Date): boolean =>
  compareDates(target, compareWith) === -1;

/**
 * Сравнивает даты, игнорируя временную часть
 * @param {Date} target дата, которая сравнивается
 * @param {Date} compareWith дата, с которой производится сравнение
 * @returns { boolean }
 */
export const isAfterDate = (target: Date, compareWith: Date): boolean =>
  compareDates(target, compareWith) === 1;

export const getReadableDate = (
  targetDate: string | Date,
  opts: {
    withWeekday?: boolean;
    withYear?: boolean;
    omitYearIfThisYear?: boolean;
  } = {},
): string => {
  const dt = new Date(targetDate);
  if (!isValidDate(dt)) return '';

  const today = new Date();

  const dtMonth = dt.getMonth();
  const dtMonthName = MONTH_NAMES_DECLENSED[dtMonth + 1];

  let result = `${dt.getDate()} ${dtMonthName}`;

  if (opts.withWeekday) {
    const dtWeekday = dt.getDay() === 0 ? 7 : dt.getDay();
    result += ', ' + WEEKDAY_SHORTNAMES[dtWeekday].toLocaleLowerCase();
  }

  if (opts.withYear) {
    const dtYear = dt.getFullYear();
    if (!opts.omitYearIfThisYear || dtYear !== today.getFullYear()) {
      result += opts.withWeekday ? ',' : '';
      result += ` ${dtYear}`;
    }
  }

  return result;
};
