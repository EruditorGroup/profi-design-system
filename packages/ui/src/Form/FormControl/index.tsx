import React, {HTMLAttributes} from 'react';
import classnames from 'classnames';

import {ISize} from '@eruditorgroup/profi-toolkit';

import styles from './FormControl.module.scss';

export type FormControlSize = Extract<ISize, 's' | 'm' | 'l' | 'xl'>;

type FormControlInternalProps = {
  label?: string;
  labelFor?: string;
  isLabelFloated?: boolean;
};

export type FormControlProps = {
  withFloatLabel?: boolean;

  size?: FormControlSize;
  block?: boolean;

  invalid?: boolean;
  disabled?: boolean;

  lower?: React.ReactNode;
  upper?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;

  onClick?: React.MouseEventHandler<HTMLElement>;
};

export type FormControlHTMLProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'size'
> &
  FormControlInternalProps &
  FormControlProps;

const FormControl: React.FC<React.PropsWithChildren<FormControlHTMLProps>> = ({
  className,

  label,
  withFloatLabel,
  isLabelFloated,

  size = 'l',
  block = true,
  labelFor,
  invalid,
  disabled,

  upper,
  lower,
  leading,
  trailing,
  children,

  onClick,
  ...props
}) => (
  <div
    className={classnames(
      styles['form-control'],
      styles[`form-control_${size}`],
      withFloatLabel && styles[`form-control_withLabel_${size}`],
      block && styles['form-control_block'],
      disabled && styles['form-control_disabled'],
      invalid && styles['form-control_invalid'],
      className,
    )}
    onClick={onClick}
    {...props}
  >
    {upper}
    <div className={styles['form-control__flex']}>
      {leading && (
        <div className={styles['form-control__prefix']}>{leading}</div>
      )}
      {withFloatLabel ? (
        <div
          className={classnames(
            styles['form-control__infix'],
            withFloatLabel && styles['form-control__infix_withLabel'],
          )}
        >
          <label
            className={classnames(
              styles['form-control__label'],
              isLabelFloated && styles['form-control__label_floated'],
            )}
            htmlFor={labelFor}
          >
            {label}
          </label>
          {children}
        </div>
      ) : (
        children
      )}

      {trailing && (
        <div className={styles['form-control__suffix']}>{trailing}</div>
      )}
    </div>
    {lower}
  </div>
);

export default FormControl;
