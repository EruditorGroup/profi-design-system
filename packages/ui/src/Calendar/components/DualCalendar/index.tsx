import React, {CSSProperties, useMemo, useState} from 'react';
import classnames from 'classnames';

import {default as Calendar} from '../Calendar';
import type {CalendarProps} from '../Calendar';
import styles from './DualCalendar.module.scss';

export type DualCalendarProps = CalendarProps & {
  containerClassName?: string;
  containerStyle?: CSSProperties;
};

const DualCalendar: React.FC<DualCalendarProps> = ({
  selectedDays = [],
  forceMonth,
  onMonthChange: _onMonthChange,
  containerClassName,
  containerStyle,
  ...props
}) => {
  const [month, setMonth] = useState<Date>(
    forceMonth || selectedDays.slice().sort((a, b) => +a - +b)[0] || new Date(),
  );
  const supplimentaryMonth = useMemo(
    () => new Date(month.getFullYear(), month.getMonth() + 1, 1),
    [month],
  );

  const onMonthChange = (offsetMonth = 0) => (newMonth: Date): void => {
    const newMonthNormalized = new Date(
      newMonth.getFullYear(),
      newMonth.getMonth() - offsetMonth,
      1,
    );
    setMonth(() => newMonthNormalized);
    _onMonthChange && _onMonthChange(newMonthNormalized);
  };

  return (
    <div
      className={classnames(styles['container'], containerClassName)}
      style={containerStyle}
    >
      <Calendar
        {...props}
        hideMonthForward
        selectedDays={selectedDays}
        forceMonth={month}
        onMonthChange={onMonthChange()}
      />
      <div className={styles['container__spacer']} />
      <Calendar
        {...props}
        hideMonthBack
        selectedDays={selectedDays}
        forceMonth={supplimentaryMonth}
        onMonthChange={onMonthChange(1)}
      />
    </div>
  );
};

export default DualCalendar;
