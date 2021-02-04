import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Input.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.RefAttributes<HTMLInputElement> {
  shmid?: string;
  label?: string;
}

const Input: React.ForwardRefExoticComponent<InputProps> = forwardRef(
  ({className, label, ...props}, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={classnames(styles['input'], className)}
          {...props}
        />
      </>
    );
  },
);

export default Input;
