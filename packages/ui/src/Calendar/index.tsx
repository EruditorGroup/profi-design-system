import React, {
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import classnames from 'classnames';

import {ChevronLeftIcon, ChevronRightIcon} from '@eruditorgroup/profi-icons';
import {isDateEqual, WEEKDAYS} from '@eruditorgroup/profi-toolkit';

import Button from '../Button';

import styles from './Calendar.module.scss';
import {
  composeDays,
  markSelectedDays,
  getMonthInfo,
  DayInfo,
  MonthInfo,
  isNavigationDisabled,
} from './utils';

export type SelectionMode = 'Single' | 'Multi' | 'Pair';

export type CalendarProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  selectedDays?: ReadonlyArray<Date>;
  forceMonth?: Date;
  minDate?: Date;
  maxDate?: Date;
  selectionMode?: SelectionMode;
  allowUnsetDayInSingleMode?: boolean;
  hideMonthForward?: boolean;
  hideMonthBack?: boolean;
  hideWeekdays?: boolean;
  monthAlign?: 'center' | 'left' | 'right';

  onChange?: (dates: ReadonlyArray<Date>) => void;
  onMonthChange?: (newMonth: Date) => void;

  children: never;
};

const Calendar: React.FC<CalendarProps> = ({
  selectedDays = [],
  forceMonth,
  minDate,
  maxDate,
  selectionMode = 'Multi',
  allowUnsetDayInSingleMode,
  hideMonthForward,
  hideMonthBack,
  hideWeekdays,
  monthAlign = 'center',
  onChange,
  onMonthChange,
  className,
  ...htmlProps
}) => {
  const [month, setMonth] = useState<Readonly<MonthInfo>>(() =>
    getMonthInfo(
      forceMonth ||
        selectedDays.slice().sort((a, b) => +a - +b)[0] ||
        new Date(),
    ),
  );

  useEffect(() => {
    forceMonth && setMonth(() => getMonthInfo(forceMonth));
  }, [forceMonth]);

  const [monthBackDisabled, monthForwardDisabled] = useMemo(
    () => isNavigationDisabled(month, {minDate, maxDate}),
    [month, minDate, maxDate],
  );

  const daysByWeeks = useMemo(() => composeDays(month, minDate, maxDate), [
    month,
    minDate,
    maxDate,
  ]);

  const enrichedDays = useMemo(
    () => markSelectedDays(daysByWeeks, selectedDays),
    [daysByWeeks, selectedDays],
  );

  const handleChangeMonth = useCallback(
    (direction: -1 | 1) => () => {
      const newMonth = new Date(month.year, month.monthNumber + direction, 1);
      setMonth(() => getMonthInfo(newMonth));
      onMonthChange && onMonthChange(newMonth);
    },
    [month, onMonthChange],
  );

  const handleDateClick = useCallback(
    (day: DayInfo) => () => {
      if (!onChange || day.disabled) return;

      const selected = selectedDays.find((s) => isDateEqual(s, day.date));

      if (selected) {
        if (selectionMode === 'Single') {
          if (allowUnsetDayInSingleMode) {
            onChange([]);
          }
        } else {
          onChange(selectedDays.filter((x) => x !== selected));
        }
      } else {
        if (selectionMode === 'Single') {
          onChange([day.date]);
        } else {
          onChange(selectedDays.concat(day.date));
        }
      }
    },
    [selectedDays, onChange, selectionMode, allowUnsetDayInSingleMode],
  );

  return (
    <div className={classnames(styles['container'], className)} {...htmlProps}>
      <div className={styles['header']}>
        {(monthAlign === 'center' || !hideMonthBack) && (
          <Button
            rounded
            design="transparent"
            size="m"
            className={classnames(
              styles['header__button'],
              hideMonthBack && styles['header__button_hidden'],
            )}
            disabled={monthBackDisabled}
            onClick={handleChangeMonth(-1)}
          >
            <ChevronLeftIcon />
          </Button>
        )}
        <div
          className={classnames(
            styles['header__title'],
            styles[`header__title_${monthAlign}`],
          )}
        >
          {month.monthName}&nbsp;{month.year}
        </div>
        {(monthAlign === 'center' || !hideMonthForward) && (
          <Button
            rounded
            design="transparent"
            size="m"
            className={classnames(
              styles['header__button'],
              hideMonthForward && styles['header__button_hidden'],
            )}
            disabled={monthForwardDisabled}
            onClick={handleChangeMonth(1)}
          >
            <ChevronRightIcon />
          </Button>
        )}
      </div>
      <table className={styles['body']}>
        {!hideWeekdays && (
          <thead>
            <tr>
              {WEEKDAYS.map((weekday) => (
                <th
                  key={weekday.id}
                  title={weekday.fullName}
                  className={styles['body__weekday']}
                >
                  {weekday.shortName}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {enrichedDays.map((week, weekIdx) => (
            <tr key={weekIdx}>
              {week.map((day) => (
                <td
                  key={day.date.toISOString()}
                  className={styles['body__day']}
                >
                  {day.label && (
                    <div
                      onClick={handleDateClick(day)}
                      className={classnames(
                        styles['date'],
                        day.disabled && styles['date_disabled'],
                        day.selected && styles['date_selected'],
                        day.isToday && styles['date_today'],
                      )}
                    >
                      {day.label}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
