import React, {useCallback, useMemo, useState} from 'react';
import classnames from 'classnames';
import {CalendarIcon} from '@eruditorgroup/profi-icons';

import {Calendar} from '../Calendar';
import Dropdown from '../Dropdown';
import {Input} from '../Form';
import type {CalendarProps} from '../Calendar';

import styles from './Datepicker.module.scss';

export type DatepickerProps = Omit<
  CalendarProps,
  'selectedDays' | 'selectionMode' | 'onChange'
> & {
  value?: string | Date;
  placeholder?: string;
  onChange?: (date: Date) => void;
  shmid?: string;
  inputClassName?: string;
  calendarClassName?: string;
};

const Datepicker: React.FC<DatepickerProps> = ({
  value,
  placeholder = 'Дата',
  shmid,
  className,
  inputClassName,
  calendarClassName,
  onChange: _onChange,
  ...calendarProps
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null,
  );
  const label = useMemo(() => selectedDate?.toLocaleString(), [selectedDate]);

  const onChange: CalendarProps['onChange'] = useCallback(
    ([newDate]: Date[]): void => {
      setSelectedDate(newDate);
      _onChange && _onChange(newDate);
    },
    [_onChange],
  );

  return (
    <Dropdown data-shmid={shmid} className={className}>
      <Dropdown.Toggler
        as={Input}
        readOnly
        value={label}
        placeholder={placeholder}
        className={inputClassName}
        leading={<CalendarIcon className={styles['icon']} />}
      />
      <Dropdown.Portal>
        <Calendar
          className={classnames(styles['calendar'], calendarClassName)}
          selectedDays={selectedDate ? [selectedDate] : []}
          selectionMode="Single"
          onChange={onChange}
          {...calendarProps}
        />
      </Dropdown.Portal>
    </Dropdown>
  );
};

export default Datepicker;
