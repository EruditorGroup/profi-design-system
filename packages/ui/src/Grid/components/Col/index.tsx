import React, {forwardRef} from 'react';
import cx from 'classnames';
import styles from './Col.module.scss';

import type {HTMLAttributes} from 'react';

//prettier-ignore
type ColOffset = 
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
  | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11';

type ColSpan = ColOffset | 12 | '12';

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  span?: ColSpan;
  offset?: ColOffset;
}

const Col = forwardRef<HTMLDivElement, ColProps>(function Col(
  {children, className, span, offset, ...props},
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        styles['col'],
        span && styles[`col_span-${span}`],
        offset && styles[`col_offset-${offset}`],
      )}
    >
      {children}
    </div>
  );
});

export default Col;
