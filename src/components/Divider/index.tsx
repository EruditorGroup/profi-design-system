import React, {forwardRef} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classNames from 'classnames';
import styles from './Divider.module.scss';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  fit?: boolean;
}

const Divider: ForwardRefExoticComponent<
  DividerProps & RefAttributes<HTMLDivElement>
> = forwardRef(({fit = false, className, ...props}, ref) => {
  return (
    <div
      className={classNames(styles['divider'], fit && styles['fit'], className)}
      ref={ref}
      {...props}
    />
  );
});

export default Divider;
