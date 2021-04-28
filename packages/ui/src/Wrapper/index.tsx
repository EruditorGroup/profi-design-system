import React, {forwardRef} from 'react';
import classnames from 'classnames';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import styles from './Wrapper.module.scss';

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  bg?: 'grey' | 'white' | 'transparent';
}

const Wrapper: ForwardRefExoticComponent<
  WrapperProps & RefAttributes<HTMLDivElement>
> = forwardRef(({className, bg = 'grey', ...props}, ref) => {
  return (
    <div className={styles[`bg-${bg}`]}>
      <div
        className={classnames(styles['wrapper'], className)}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Wrapper;
