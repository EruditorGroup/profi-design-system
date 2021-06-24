import React, {useState, useRef, useCallback} from 'react';
import cx from 'classnames';
import {Input, InputProps} from '../index';

import {getCountryByPhone} from './utils';
import {ICountryCode} from './constants';
import {useAutoFocus} from '@eruditorgroup/profi-toolkit';

import styles from './BarePhoneInput.module.scss';

export interface PhoneInputProps
  extends Omit<InputProps, 'onChange' | 'placeholder' | 'mask'> {
  defaultValue?: string;
  defaultCountryCode?: ICountryCode;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
}

export default function PhoneInput({
  value: propValue,
  defaultValue = '',
  onChange,
  onFocus,
  defaultCountryCode = 'ru',
  autoFocus,
  inputRef,
  ...props
}: PhoneInputProps): React.ReactElement | null {
  const [stateValue, setStateValue] = useState(defaultValue);
  const value = propValue ?? stateValue;

  const {phoneCode, countryCode, placeholder, mask} = getCountryByPhone(
    value.toString(),
    defaultCountryCode,
  );
  const oldMask = useRef(mask);

  const handleChangeMask = useCallback<
    NonNullable<InputProps['beforeMaskedValueChange']>
  >(
    (state) => {
      // обновляем каретку на смену маски, т.к дефолтное поведение багованое
      if (state.selection && oldMask.current !== mask) {
        oldMask.current = mask;
        const caretPos = state.value.replace(/[^\d\s]+/g, '').trim().length;
        state.selection.start = caretPos;
        state.selection.end = caretPos;
      }
      return state;
    },
    [mask],
  );

  const ref = useRef<HTMLInputElement | null>(null);

  function handleFocus(ev: React.FocusEvent<HTMLInputElement>) {
    if (onFocus) onFocus(ev);
    if (!value) handleChange(phoneCode);
  }

  function handleChange(val: string) {
    if (propValue === undefined) setStateValue(val);
    if (onChange) onChange(val);
  }

  useAutoFocus(ref, autoFocus);

  return (
    <Input
      leading={
        <div className={styles['leading']}>
          <div className={cx(styles['flag'], styles[countryCode])} />
          <div className={styles['plus']}>+</div>
        </div>
      }
      beforeMaskedValueChange={handleChangeMask}
      value={value}
      onChange={(ev) => handleChange(ev.currentTarget.value)}
      onFocus={handleFocus}
      type="tel"
      autoComplete="tel"
      {...props}
      mask={mask}
      inputRef={(element) => {
        ref.current = element;
        if (typeof inputRef === 'function') inputRef(element);
        else if (inputRef) inputRef.current = element;
      }}
      placeholder={placeholder}
    />
  );
}
