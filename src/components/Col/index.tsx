import React, {forwardRef} from 'react';
import classNames from 'classnames';
import styles from './Col.module.scss';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number | string;
  offset?: number | string;
}

const Col: React.ForwardRefExoticComponent<
  ColProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(({span, offset, className, ...props}, ref) => {
  return (
    <div
      className={classNames(
        styles['col'],
        span && styles[`span-${span}`],
        offset && styles[`offset-${offset}`],
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

export default Col;
