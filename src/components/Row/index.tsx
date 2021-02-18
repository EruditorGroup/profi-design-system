import React, {forwardRef} from 'react';
import styles from './Row.module.scss';

export type RowProps = React.HTMLAttributes<HTMLDivElement>;

const Row: React.ForwardRefExoticComponent<
  RowProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(({className, ...props}, ref) => {
  return (
    <div className={`${styles['row']} ${className}`} ref={ref} {...props} />
  );
});

export default Row;
