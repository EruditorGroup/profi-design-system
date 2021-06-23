import React, {useState, useRef} from 'react';
import cx from 'classnames';

import NumberFormat, {NumberFormatProps} from 'react-number-format';

import {getCountryCode, formatWithPattern} from './utils';
import {BASE_COUNTRIES, ICountryCode} from './constants';
import {useAutoFocus} from '@eruditorgroup/profi-toolkit';

import inputStyle from '../BareInput/BareInput.module.scss';
import styles from './PhoneInput.module.css';
import {BaseControlProps} from '../types';

export interface BarePhoneInputProps
  extends Omit<BaseControlProps<HTMLInputElement>, 'value' | 'size'>,
    Omit<NumberFormatProps, 'size'> {
  defaultValue?: string;
  invalid?: boolean;
  onChange?: (value: string) => void;
  countryCode?: ICountryCode;
  autoFocus?: boolean;
  inputClassName?: string;
}

function fixControlledValue(
  propValue: BarePhoneInputProps['value'],
  stateValue: string,
): BarePhoneInputProps['value'] {
  if (typeof propValue === 'undefined' || propValue === null) {
    return stateValue;
  } else {
    return propValue;
  }
}

export const PhoneInput = ({
  value: propValue,
  defaultValue = '',
  onChange,
  onFocus,
  countryCode = 'ru',
  className,
  autoFocus,
  ...props
}: BarePhoneInputProps): React.ReactElement | null => {
  const [stateValue, setStateValue] = useState(defaultValue);
  const value = fixControlledValue(propValue, stateValue);

  const [сode, setCode] = useState(() => getCountryCode(value, countryCode));
  const {defaultCode, placeholder} =
    BASE_COUNTRIES[сode] || BASE_COUNTRIES[countryCode];

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleFocus(ev: React.FocusEvent<HTMLInputElement>) {
    const element = inputRef.current;
    if (onFocus) onFocus(ev);

    if (!value && element) {
      setDefaultValue();
      // number format тащит курсор в начало строки на onfocus
      setTimeout(function () {
        element.selectionStart = element.selectionEnd = element.value.length;
      }, 10);
    }
  }

  function setDefaultValue() {
    if (propValue === undefined) {
      setStateValue(defaultCode);
    } else {
      if (onChange) onChange(defaultCode);
    }
  }

  function handleChange(val: string) {
    if (propValue === undefined) {
      setStateValue(val);
    }

    setCode(getCountryCode(val, countryCode));
    if (onChange) onChange(val);
  }

  useAutoFocus(inputRef, autoFocus);

  console.log(`placeholder=${placeholder}`, props);
  return (
    <div className={styles['root']}>
      <div className={cx(styles['flag'], styles[сode])} />
      <div className={styles['plus']}>+</div>
      <NumberFormat
        className={cx(inputStyle['input'], className)}
        type="tel"
        autoComplete="tel"
        value={value}
        format={formatWithPattern}
        onValueChange={(values) => handleChange(values.formattedValue)}
        onFocus={handleFocus}
        getInputRef={(el: HTMLInputElement) => (inputRef.current = el)}
        {...props}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PhoneInput;
