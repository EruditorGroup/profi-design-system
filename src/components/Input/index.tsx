import React, {forwardRef, useCallback} from 'react';
import type {
  ForwardRefExoticComponent,
  RefAttributes,
  Ref,
  InputHTMLAttributes,
} from 'react';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

import useFloatLabel from './hooks/useFloatLabel';

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  withFloatLabel?: boolean;

  block?: boolean;

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
  /**
   * Character to cover unfilled editable parts of mask. Default character is "_". If set to null, unfilled parts will be empty, like in ordinary input.
   */
  maskPlaceholder?: string | null;
  /**
   * Show mask even in empty input without focus.
   */
  alwaysShowMask?: boolean;
  /**
   * Use inputRef instead of ref if you need input node to manage focus, selection, etc.
   */
  inputRef?: Ref<HTMLInputElement>;
}

const Input: ForwardRefExoticComponent<
  InputProps & RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {
      className,
      placeholder,
      withFloatLabel,
      block = true,
      value,
      mask,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [isFloated, focusProps] = useFloatLabel(Boolean(value), {
      onFocus,
      onBlur,
    });

    const InputComponent = useCallback(
      (inputProps: InputProps) => {
        return mask ? (
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
        );
      },
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
            withFloatLabel && styles['input-withFloatLabel'],
          ),
          ...focusProps,
          ...props,
        })}
      </div>
    );
  },
);

export default Input;
