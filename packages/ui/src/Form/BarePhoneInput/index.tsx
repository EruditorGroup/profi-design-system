import React, {ForwardedRef, forwardRef} from 'react';
import cx from 'classnames';
import {Input, InputProps} from '../index';

import {correctPhone, getCountryByPhone} from './utils';
import {ICountryCode} from './constants';
import {
  useAutoFocus,
  useCombinedRef,
  useControllableState,
} from '@eruditorgroup/profi-toolkit';

import styles from './BarePhoneInput.module.scss';

export interface PhoneInputProps
  extends Omit<
    InputProps,
    'onChange' | 'onPaste' | 'placeholder' | 'mask' | 'withFloatLabel'
  > {
  defaultValue?: string;
  defaultCountryCode?: ICountryCode;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
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

  function handleFocus(ev: React.FocusEvent<HTMLInputElement>) {
    if (onFocus) onFocus(ev);
    if (!value) setValue(phoneCode);
  }

  function handlePaste(ev: React.ClipboardEvent<HTMLInputElement>) {
    try {
      setValue(correctPhone(ev.clipboardData.getData('Text'), phoneCode));
      ev.preventDefault();
    } catch (err) {}
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
      mask={mask}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      onPaste={handlePaste}
      onFocus={handleFocus}
      type="tel"
      autoComplete="tel"
      {...props}
      ref={outRef}
      inputRef={setRef}
      placeholder={placeholder}
    />
  );
});

export default PhoneInput;
