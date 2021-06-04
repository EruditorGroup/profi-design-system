import React, {useCallback, useMemo, useRef, useState} from 'react';
import classnames from 'classnames';
import {CalendarIcon} from '@eruditorgroup/profi-icons';
import {getReadableDate, useCurrentScreen} from '@eruditorgroup/profi-toolkit';

import BodyPortal from '../BodyPortal';
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
  const isMobile = useCurrentScreen('mobile', false);
  const closeDropdownRef = useRef<() => void>();

  const [datepickerOpen, setDatepickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null,
  );
  const label = useMemo(
    () =>
      selectedDate
        ? getReadableDate(selectedDate, {
            withWeekday: true,
            withYear: true,
            omitYearIfThisYear: true,
          })
        : '',
    [selectedDate],
  );

  const onChange: CalendarProps['onChange'] = useCallback(
    ([newDate]: Date[]): void => {
      setSelectedDate(newDate);
      _onChange && _onChange(newDate);
      closeDropdownRef.current && closeDropdownRef.current();
    },
    [_onChange],
  );

  const calendarComponent = useMemo(
    () => (
      <Calendar
        className={calendarClassName}
        selectedDays={selectedDate ? [selectedDate] : []}
        selectionMode="Single"
        onChange={onChange}
        {...calendarProps}
      />
    ),
    [selectedDate, calendarClassName, onChange, calendarProps],
  );

  return (
    <Dropdown
      data-shmid={shmid}
      className={className}
      closeRefHandler={closeDropdownRef}
      onChange={setDatepickerOpen}
    >
      <Dropdown.Toggler
        as={Input}
        readOnly
        value={label}
        placeholder={placeholder}
        className={classnames(styles['input'], inputClassName)}
        leading={<CalendarIcon className={styles['icon']} />}
      />
      {isMobile ? (
        datepickerOpen && (
          <BodyPortal className={styles['mobile-container']}>
            <Dropdown.Portal
              animated={false}
              position="from-bottom"
              className={styles['dropdown']}
            >
              {calendarComponent}
            </Dropdown.Portal>
          </BodyPortal>
        )
      ) : (
        <Dropdown.Portal className={styles['dropdown']}>
          {calendarComponent}
        </Dropdown.Portal>
      )}
    </Dropdown>
  );
};

export default Datepicker;
