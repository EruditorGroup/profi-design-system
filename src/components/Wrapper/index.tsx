import React, {forwardRef} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import styles from './Wrapper.module.scss';

export type WrapperProps = HTMLAttributes<HTMLDivElement>;

const Wrapper: ForwardRefExoticComponent<
  WrapperProps & RefAttributes<HTMLDivElement>
> = forwardRef(({className, ...props}, ref) => {
  return (
    <div className={`${styles['wrapper']} ${className}`} ref={ref} {...props} />
  );
});

export default Wrapper;
