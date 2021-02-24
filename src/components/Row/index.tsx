import React, {forwardRef} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import styles from './Row.module.scss';

export type RowProps = HTMLAttributes<HTMLDivElement>;

const Row: ForwardRefExoticComponent<
  RowProps & RefAttributes<HTMLDivElement>
> = forwardRef(({className, ...props}, ref) => {
  return (
    <div className={`${styles['row']} ${className}`} ref={ref} {...props} />
  );
});

export default Row;
