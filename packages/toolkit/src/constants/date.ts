type ItemInfo<IDT = string> = {
  id: IDT;
  shortName: string;
  fullName: string;
};

export type Month = ItemInfo<
  | 'jan'
  | 'feb'
  | 'mar'
  | 'apr'
  | 'may'
  | 'jun'
  | 'jul'
  | 'aug'
  | 'sep'
  | 'oct'
  | 'nov'
  | 'dec'
>;

export const MONTHS: Month[] = [
  {id: 'jan', shortName: 'Янв', fullName: 'Январь'},
  {id: 'feb', shortName: 'Фев', fullName: 'Февраль'},
  {id: 'mar', shortName: 'Мар', fullName: 'Март'},
  {id: 'apr', shortName: 'Апр', fullName: 'Апрель'},
  {id: 'may', shortName: 'Май', fullName: 'Май'},
  {id: 'jun', shortName: 'Июн', fullName: 'Июнь'},
  {id: 'jul', shortName: 'Июл', fullName: 'Июль'},
  {id: 'aug', shortName: 'Авг', fullName: 'Август'},
  {id: 'sep', shortName: 'Сен', fullName: 'Сентябрь'},
  {id: 'oct', shortName: 'Окт', fullName: 'Октябрь'},
  {id: 'nov', shortName: 'Ноя', fullName: 'Ноябрь'},
  {id: 'dec', shortName: 'Дек', fullName: 'Декабрь'},
];
export const MONTH_NAMES = MONTHS.map((m) => m.fullName);

export type Weekday = ItemInfo<'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su'>;

export const WEEKDAYS: Weekday[] = [
  {id: 'mo', shortName: 'Пн', fullName: 'Понедельник'},
  {id: 'tu', shortName: 'Вт', fullName: 'Вторник'},
  {id: 'we', shortName: 'Ср', fullName: 'Среда'},
  {id: 'th', shortName: 'Чт', fullName: 'Четверг'},
  {id: 'fr', shortName: 'Пт', fullName: 'Пятница'},
  {id: 'sa', shortName: 'Сб', fullName: 'Суббота'},
  {id: 'su', shortName: 'Вс', fullName: 'Воскресенье'},
];
export const DAYS_IN_WEEK = WEEKDAYS.length;
