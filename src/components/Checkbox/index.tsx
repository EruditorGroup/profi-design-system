import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Checkbox.module.scss';

// export interface CheckboxProps {
//   design?: 'brand';
// }

const Checkbox: React.ForwardRefExoticComponent<
  // CheckboxProps &
  React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {
      // design='brand',
      children,
      className,
      key,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <label
        style={style}
        key={key}
        className={classnames(styles['label'], className)}
      >
        <input
          ref={ref}
          className={styles['input']}
          type="checkbox"
          {...props}
        />
        <i
          className={classnames(styles['checker'], styles[`design-brand`])}
        ></i>
        <div className={styles['content']}>{children}</div>
      </label>
    );
  },
);

export default Checkbox;
