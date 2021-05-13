import React, {forwardRef} from 'react';
import cx from 'classnames';
import styles from './Container.module.scss';

import type {HTMLAttributes} from 'react';

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Container({children, className, ...props}, ref) {
    return (
      <div {...props} ref={ref} className={cx(className, styles['container'])}>
        {children}
      </div>
    );
  },
);

export default Container;
