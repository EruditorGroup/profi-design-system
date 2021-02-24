import React, {forwardRef, useCallback, useState} from 'react';
import type {
  InputHTMLAttributes,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';
import classNames from 'classnames';
import Input, {InputProps} from '../Input';

import styles from './InputUnit.module.scss';

export interface InputUnitProps extends InputProps {
  unit?: ReactNode;
}

const InputUnit: ForwardRefExoticComponent<
  InputUnitProps &
    InputHTMLAttributes<HTMLInputElement> &
    RefAttributes<HTMLInputElement>
> = forwardRef(
  ({unit, placeholder, withFloatLabel, onKeyUp, ...props}, ref) => {
    const [value, setValue] = useState('');
    const _onChange = useCallback(
      (ev) => {
        if (onKeyUp) onKeyUp(ev);
        setValue(ev.target.value.replace(/[^\d]/g, ''));
      },
      [onKeyUp],
    );

    return (
      <div className={classNames(styles['wrapper'], styles)}>
        <Input
          onChange={_onChange}
          value={value}
          className={styles['input']}
          ref={ref}
          withFloatLabel={withFloatLabel}
          placeholder={placeholder}
          {...props}
        />
        {unit && (
          <div
            className={classNames(styles['unit'], {
              [styles['unit-withFloatLabel']]: placeholder && withFloatLabel,
            })}
          >
            <span className={styles['value']}>{value}</span>
            <span className={styles['unitOffset']} />
            {!placeholder || value ? unit : ''}
          </div>
        )}
      </div>
    );
  },
);

export default InputUnit;
