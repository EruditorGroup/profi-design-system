import React, {useState, useRef, useCallback} from 'react';
import cx from 'classnames';
import {Input, InputProps} from '../index';

import {getCountryByPhone} from './utils';
import {ICountryCode} from './constants';
import {useAutoFocus} from '@eruditorgroup/profi-toolkit';

import styles from './BarePhoneInput.module.scss';
import {ErrorIcon} from '../../../../icons/es';

export interface PhoneInputProps
  extends Omit<InputProps, 'onChange' | 'onPaste' | 'placeholder' | 'mask'> {
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

  const _onChange = useRef(onChange);
  _onChange.current = onChange;

  const handleChange = useCallback(
    (val: string) => {
      if (propValue === undefined) setStateValue(val);
      _onChange.current?.(val);
    },
    [propValue, _onChange],
  );

  const handlePaste = useCallback(
    (ev: React.ClipboardEvent<HTMLInputElement>) => {
      ev.preventDefault();
      const clearValue: string = ev.clipboardData
        .getData('Text')
        .replace(/[^\d]/g, '');
      console.log(clearValue);
      if (clearValue.startsWith(phoneCode)) {
        handleChange(clearValue);
      } else if (clearValue.startsWith('8') && clearValue.length === 11) {
        // paste 89031111111 -> 79031111111
        handleChange(clearValue.replace('8', '7'));
      } else {
        // paste 9031111111 -> 79031111111
        handleChange(`${phoneCode}${clearValue}`);
      }
    },
    [handleChange, phoneCode],
  );

  const ref = useRef<HTMLInputElement | null>(null);

  function handleFocus(ev: React.FocusEvent<HTMLInputElement>) {
    if (onFocus) onFocus(ev);
    if (!value) handleChange(phoneCode);
  }

  useAutoFocus(ref, autoFocus);

  return (
    <Input
      leading={
        <div className={styles['leading']}>
          <div className={cx(styles['flag'], styles[countryCode])}>
            {!countryCode && <ErrorIcon />}
          </div>
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
      onPaste={handlePaste}
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
