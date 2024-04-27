import React, {ForwardedRef, forwardRef, useCallback, useRef} from 'react';
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
  const onInputValue = useRef(value);

  const handleInput = useCallback((event) => {
    onInputValue.current = event.target.value; // Update tempValue on every input
  }, []);
  const handleChange = useCallback(
    (event) => {
      // контроль работы onInput чтобы избежать двойного срабатывания onChange, но учесть проблему с автокомплитом
      if (onInputValue.current.replace('_', '').length > value.length) {
        setValue(onInputValue.current);
      } else {
        setValue(event.target.value);
      }
    },
    [setValue, value.length],
  );

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
      trailing={<div className={styles['leading']}>{trailing}</div>}
      mask={mask}
      value={value}
      onChange={handleChange}
      /** onInput надо оставить, потому что при autocomplete на iphone не отрабатывает ни paste, ни onChange */
      onInput={handleInput}
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
