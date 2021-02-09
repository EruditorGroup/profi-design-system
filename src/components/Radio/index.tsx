import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Radio.module.scss';

// export interface RadioProps {
//   design?: 'light' | 'brand';
// }

const Radio: React.ForwardRefExoticComponent<
  // RadioProps &
  React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {
      // design = 'brand',
      children,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <label style={style} className={classnames(styles['label'], className)}>
        <input ref={ref} className={styles['input']} type="radio" {...props} />
        <i
          className={classnames(styles['checker'], styles[`design-brand`])}
        ></i>
        <div className={styles['content']}>{children}</div>
      </label>
    );
  },
);

export default Radio;
