import React, {HTMLAttributes} from 'react';
import classnames from 'classnames';

import {ISize} from 'uitype';

import styles from './FormControl.module.scss';

type FormControlSize = Extract<ISize, 's' | 'm' | 'l' | 'xl'>;

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

  leading?: React.ReactNode;
  trailing?: React.ReactNode;
};

export type FormControlHTMLProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'size'
> &
  FormControlInternalProps &
  FormControlProps;

const FormControl: React.FC<FormControlHTMLProps> = ({
  className,

  label,
  withFloatLabel,
  isLabelFloated,

  size = 'l',
  block = true,
  labelFor,
  invalid,
  disabled,

  leading,
  trailing,
  children,

  onClick,
  ...props
}) => {
  return (
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
      <div className={styles['form-control-flex']}>
        {leading && (
          <div className={styles['form-control-prefix']}>{leading}</div>
        )}
        <div
          className={classnames(
            styles['form-control-infix'],
            withFloatLabel && styles['form-control-infix_withLabel'],
          )}
        >
          {withFloatLabel && (
            <label
              className={classnames(
                styles['form-control-label'],
                isLabelFloated && styles['form-control-label_floated'],
              )}
              htmlFor={labelFor}
            >
              {label}
            </label>
          )}
          {children}
        </div>
        {trailing && (
          <div className={styles['form-control-suffix']}>{trailing}</div>
        )}
      </div>
    </div>
  );
};

export default FormControl;
