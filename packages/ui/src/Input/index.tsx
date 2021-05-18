import React, {forwardRef, useCallback, useRef} from 'react';
import type {InputHTMLAttributes} from 'react';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

import {useFloatLabel} from '@eruditorgroup/profi-toolkit';

import styles from './Input.module.scss';
import {ISize} from 'uitype';

type InputSize = Extract<ISize, 's' | 'm' | 'l' | 'xl'>;

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  withFloatLabel?: boolean;

  size?: InputSize;

  block?: boolean;

  invalid?: boolean;

  /**
   * Mask string. Format characters are:
   * * `9`: `0-9`
   * * `a`: `A-Z, a-z`
   * * `\*`: `A-Z, a-z, 0-9`
   *
   * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
   * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
   */
  mask?: string | Array<string | RegExp>;

  // Show mask when input is empty and has no focus.
  alwaysShowMask?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      placeholder,
      withFloatLabel,
      size = 'm',
      block = true,
      disabled,
      invalid,
      value,
      defaultValue,
      mask,
      alwaysShowMask,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [isFloated, focusHandlers] = useFloatLabel(
      Boolean(value || defaultValue),
      {
        onFocus,
        onBlur,
      },
    );

    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = ref || internalRef;

    const onWrapperClick = (): void => {
      if (typeof inputRef === 'object' && inputRef !== null) {
        inputRef.current?.focus();
      }
    };

    const InputComponent = useCallback(
      (inputProps: Omit<InputProps, 'size'>) =>
        mask ? (
          <InputMask
            {...inputProps}
            inputRef={(el) => {
              if (typeof inputRef === 'function') {
                inputRef(el);
              } else if (typeof inputRef === 'object' && inputRef !== null) {
                inputRef.current = el;
              }
            }}
            mask={mask}
            alwaysShowMask={alwaysShowMask}
          />
        ) : (
          <input {...inputProps} ref={inputRef} />
        ),
      [mask, alwaysShowMask, inputRef],
    );

    return (
      <div
        className={classnames(
          styles['form-control'],
          withFloatLabel
            ? styles[`form-control_withLabel_${size}`]
            : styles[`form-control_${size}`],
          block && styles['form-control_block'],
          disabled && styles['form-control_disabled'],
          invalid && styles['form-control_invalid'],
          className,
        )}
        onClick={onWrapperClick}
      >
        <div className={styles['form-control-flex']}>
          <div className={styles['form-control-infix']}>
            {withFloatLabel && (
              <label
                className={classnames(
                  styles['input-label'],
                  isFloated && styles['input-label_floated'],
                )}
              >
                {placeholder}
              </label>
            )}
            {InputComponent({
              value,
              defaultValue,
              disabled,
              placeholder: withFloatLabel ? '' : placeholder,
              className: classnames(styles['input']),
              ...focusHandlers,
              ...props,
            })}
          </div>
        </div>
      </div>
    );
  },
);

export default Input;
