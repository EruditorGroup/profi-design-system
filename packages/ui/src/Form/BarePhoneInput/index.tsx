import React, {ForwardedRef, forwardRef} from 'react';
import cx from 'classnames';
import {getPatternCaretBoundary} from 'react-number-format';

import {Input, InputProps} from '../index';
import {correctPhone, getCountryByPhone} from './utils';
import {ICountryCode} from './constants';
import {
  useAutoFocus,
  useCombinedRef,
  useControllableState,
} from '@eruditorgroup/profi-toolkit';

import styles from './BarePhoneInput.module.scss';

import type {NumberFormatValues} from 'react-number-format';

export interface PhoneInputProps
  extends Omit<
    InputProps,
    'onChange' | 'onPaste' | 'placeholder' | 'mask' | 'withFloatLabel' | 'value'
  > {
  value?: string;
  defaultValue?: string;
  defaultCountryCode?: ICountryCode;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  trailing?: React.ReactNode;
}

export const PhoneInput = forwardRef(function PhoneInput(
  {
    value: propValue,
    defaultValue = '',
    onChange,
    onFocus,
    defaultCountryCode = 'ru',
    autoFocus,
    inputRef,
    trailing,
    ...props
  }: PhoneInputProps,
  outRef: ForwardedRef<HTMLInputElement>,
): React.ReactElement | null {
  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue,
    onChange,
  });

  const {phoneCode, countryCode, placeholder, mask} = getCountryByPhone(
    value?.toString(),
    defaultCountryCode,
  );

  const [ref, setRef] = useCombinedRef<HTMLInputElement | null>(inputRef);

  const handleFocus = (ev: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(ev);
    if (!value) setValue(phoneCode);
  };

  const onMaskedValueChange = (values: NumberFormatValues) => {
    setValue(values.formattedValue);
  };

  const customMaskFormatter = (formattedValue: string) => {
    return correctPhone(formattedValue, phoneCode, mask);
  };

  const getMaskedCaretBoundary = (formattedValue: string) => {
    const boundary = getPatternCaretBoundary(formattedValue, {
      format: mask,
      mask: '_',
    });

    // Ставим каретку дальше если при фокусе выставляем phoneCode
    if (value === phoneCode) {
      const phoneCodeSymbols = Array.from({length: phoneCode.length});
      phoneCodeSymbols.forEach((_, index) => {
        if (boundary[index]) {
          boundary[index] = false;
        }
      });
    }
    return boundary;
  };

  useAutoFocus(ref, autoFocus);
  return (
    <Input
      leading={
        <div className={styles['leading']}>
          <div className={cx(styles['flag'], styles[countryCode])} />
          <div className={styles['plus']}>+</div>
        </div>
      }
      trailing={<div className={styles['leading']}>{trailing}</div>}
      mask={mask}
      value={value}
      onFocus={handleFocus}
      type="tel"
      autoComplete="tel"
      {...props}
      getMaskedCaretBoundary={getMaskedCaretBoundary}
      onMaskedValueChange={onMaskedValueChange}
      customMaskFormatter={customMaskFormatter}
      ref={outRef}
      inputRef={setRef}
      placeholder={placeholder}
    />
  );
});

export default PhoneInput;
