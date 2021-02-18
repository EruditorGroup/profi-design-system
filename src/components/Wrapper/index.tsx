import React, {forwardRef} from 'react';
import styles from './Wrapper.module.scss';

export type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

const Wrapper: React.ForwardRefExoticComponent<
  WrapperProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(({className, ...props}, ref) => {
  return (
    <div className={`${styles['wrapper']} ${className}`} ref={ref} {...props} />
  );
});

export default Wrapper;
