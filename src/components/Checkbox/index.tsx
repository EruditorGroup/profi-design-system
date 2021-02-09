import React, {forwardRef, useMemo} from 'react';
import classnames from 'classnames';

import styles from './Checkbox.module.scss';

// export interface CheckboxProps {}

const Checkbox: React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>
> = forwardRef(({children, className, key, style, ...props}, ref) => {
  return (
    <label
      style={style}
      key={key}
      className={classnames(styles['label'], className)}
    >
      <input ref={ref} className={styles['input']} type="checkbox" {...props} />
      <i className={styles['checker']}></i>
      <div className={styles['content']}>{children}</div>
    </label>
  );
});

export default Checkbox;
