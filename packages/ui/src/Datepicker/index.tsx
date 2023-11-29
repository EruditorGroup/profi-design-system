import React, {useCallback, useMemo, useRef, useState} from 'react';
import classnames from 'classnames';
import {CalendarIcon} from '@eruditorgroup/profi-icons';
import {useCurrentScreen} from '@eruditorgroup/profi-toolkit';

import BodyPortal from '../BodyPortal';
import {Calendar} from '../Calendar';
import Dropdown from '../Dropdown';
import {Input} from '../Form';
import type {CalendarProps} from '../Calendar';

import styles from './Datepicker.module.scss';
import {useLabel} from './hooks/useLabel';

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
  /**
   * Применяется справо налево и применяется первый, который подходит.
   */
  inputLabelTransformerList?: ((date: Date) => string)[];
};

const Datepicker: React.FC<React.PropsWithChildren<DatepickerProps>> = ({
  value,
  placeholder = 'Дата',
  shmid,
  className,
  inputClassName,
  calendarClassName,
  onChange: _onChange,
  inputLabelTransformerList = [],
  ...calendarProps
}) => {
  const isMobile = useCurrentScreen('mobile', false);
  const closeDropdownRef = useRef<() => void>();

  const [datepickerOpen, setDatepickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null,
  );
  const label = useLabel(selectedDate, inputLabelTransformerList);

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
        className={styles['input']}
        inputClassName={inputClassName}
        leading={<CalendarIcon className={styles['icon']} />}
      />
      {isMobile ? (
        datepickerOpen && (
          <BodyPortal className={styles['mobile-container']}>
            <Dropdown.Portal
              animated={false}
              position="from-bottom"
              className={classnames(
                styles['dropdown'],
                styles['mobile-dropdown'],
              )}
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
