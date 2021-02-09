import React, {HTMLAttributes, forwardRef, useCallback, useState} from 'react';
import classNames from 'classnames';
import Input, {InputProps} from '../Input';

import styles from './InputUnit.module.scss';

export interface InputUnitProps extends InputProps {
  unit?: React.ReactNode;
}

const InputUnit: React.ForwardRefExoticComponent<
  InputUnitProps &
    HTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>
> = forwardRef(({unit, onKeyUp, ...props}, ref) => {
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
        {...props}
      />
      {unit && (
        <div className={styles['unit']}>
          <span className={styles['value']}>{value}</span>
          <span className={styles['unitOffset']} />
          {unit}
        </div>
      )}
    </div>
  );
});

export default InputUnit;
