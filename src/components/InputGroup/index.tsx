import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Input.module.css';

export interface InputGroupProps
  extends React.InputHTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {
  shmid?: string;
  label?: string;
}

const Input: React.ForwardRefExoticComponent<InputGroupProps> = forwardRef(
  ({className, label, ...props}, ref) => {
    return <div className={styles['input-group']}></div>;
  },
);

export default Input;
