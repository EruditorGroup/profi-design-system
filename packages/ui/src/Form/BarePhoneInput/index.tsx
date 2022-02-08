import React, {useCallback} from 'react';
import cx from 'classnames';
import {Input, InputProps} from '../index';

import {getCountryByPhone} from './utils';
import {ICountryCode} from './constants';
import {
  useAutoFocus,
  useCombinedRef,
  useControllableState,
} from '@eruditorgroup/profi-toolkit';

import styles from './BarePhoneInput.module.scss';

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
  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue,
    onChange,
  });

  const {phoneCode, countryCode, placeholder, mask} = getCountryByPhone(
    value.toString(),
    defaultCountryCode,
  );

  const handleChange = useCallback((val: string) => setValue(val), [setValue]);

  const [ref, setRef] = useCombinedRef<HTMLInputElement | null>(inputRef);

  function handleFocus(ev: React.FocusEvent<HTMLInputElement>) {
    if (onFocus) onFocus(ev);
    if (!value) handleChange(phoneCode);
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
      onChange={(ev) => handleChange(ev.currentTarget.value)}
      onFocus={handleFocus}
      type="tel"
      autoComplete="tel"
      {...props}
      inputRef={setRef}
      placeholder={placeholder}
    />
  );
}
