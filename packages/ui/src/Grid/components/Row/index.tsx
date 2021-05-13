import React, {forwardRef} from 'react';
import cx from 'classnames';
import styles from './Row.module.scss';

import type {HTMLAttributes} from 'react';

const Row = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Row({children, className, ...props}, ref) {
    return (
      <div {...props} ref={ref} className={cx(className, styles['row'])}>
        {children}
      </div>
    );
  },
);

export default Row;
