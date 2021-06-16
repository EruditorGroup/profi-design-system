import React, {forwardRef} from 'react';
import cx from 'classnames';
import {DotIcon, CheckIcon} from '@eruditorgroup/profi-icons';
import {Text} from '../..';

import type {InputHTMLAttributes} from 'react';

import styles from './Checkbox.module.scss';

type CheckboxSize = 'm' | 'l' | 'xl' | 'xxl';
type CheckboxType = 'radio' | 'checkbox';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: CheckboxSize;
  disabled?: boolean;
  type?: CheckboxType;
  inputClassName?: string;
  block?: boolean;
}

export const getTextSize = (size: CheckboxSize): CheckboxSize =>
  ['xxl', 'xl', 'l'].includes(size) ? 'l' : 'm';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    label,
    type = 'checkbox',
    size = 'm',
    children,
    inputClassName,
    className,
    style,
    block = false,
    ...props
  },
  ref,
) {
  const isRadio = type === 'radio';
  const Icon = isRadio ? DotIcon : CheckIcon;
  const labelText = children ?? label;
  return (
    <label
      style={style}
      className={cx(className, block && styles['block'], styles['label'])}
    >
      <input
        ref={ref}
        className={cx(inputClassName, styles['input'])}
        type={type}
        {...props}
      />
      <span
        className={cx(
          styles['checkbox'],
          styles[`checkbox_size-${size}`],
          isRadio && styles['checkbox_type-radio'],
        )}
      >
        <Icon />
      </span>
      {labelText && (
        <Text
          as="span"
          size={getTextSize(size)}
          className={cx(
            block && styles['block'],
            styles['content'],
            styles[`content_size-${size}`],
          )}
        >
          {labelText}
        </Text>
      )}
    </label>
  );
});

export default Checkbox;
