import React, {forwardRef} from 'react';
import cx from 'classnames';

import type {InputHTMLAttributes} from 'react';

import styles from './Toggle.module.scss';

export type ToggleProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  small?: boolean;
};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  {className, small, ...inputAttrs},
  ref,
) {
  return (
    <label className={cx(className, styles['label'])}>
      <input
        {...inputAttrs}
        className={styles['input']}
        type="checkbox"
        ref={ref}
      />
      <span
        className={cx(styles['toggle'], {[styles['toggle-small']]: small})}
      />
    </label>
  );
});

export default Toggle;
