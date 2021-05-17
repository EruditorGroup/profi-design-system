import React, {forwardRef, useCallback} from 'react';
import type {
  ForwardRefExoticComponent,
  RefAttributes,
  InputHTMLAttributes,
} from 'react';
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
}

const Input: ForwardRefExoticComponent<
  InputProps & RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {
      className,
      placeholder,
      withFloatLabel,
      size = 'm',
      block = true,
      invalid,
      value,
      mask,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [isFloated, focusHandlers] = useFloatLabel(Boolean(value), {
      onFocus,
      onBlur,
    });

    const InputComponent = useCallback(
      (inputProps: Omit<InputProps, 'size'>) =>
        mask ? (
          <InputMask
            {...inputProps}
            inputRef={(el) => {
              if (typeof ref === 'function') {
                ref(el);
              } else if (typeof ref === 'object' && ref !== null) {
                ref.current = el;
              }
            }}
            mask={mask}
          />
        ) : (
          <input {...inputProps} ref={ref} />
        ),
      [mask, ref],
    );

    return (
      <div className={classnames(styles['form-control'], className)}>
        {withFloatLabel && (
          <label
            className={classnames(
              styles['floatLabel'],
              block && styles['block'],
              isFloated && styles['floatLabel-floated'],
            )}
          >
            {placeholder}
          </label>
        )}
        {InputComponent({
          value,
          placeholder: withFloatLabel ? '' : placeholder,
          className: classnames(
            styles['input'],
            invalid && styles['input_invalid'],
            styles[`input_${size}`],
            withFloatLabel && styles['input-withFloatLabel'],
          ),
          ...focusHandlers,
          ...props,
        })}
      </div>
    );
  },
);

export default Input;
