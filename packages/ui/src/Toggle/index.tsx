import React, {forwardRef} from 'react';
import cx from 'classnames';

import type {InputHTMLAttributes} from 'react';

import styles from './Toggle.module.scss';

export type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  {className, ...inputAttrs},
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
      <span className={styles['toggle']} />
    </label>
  );
});

export default Toggle;
