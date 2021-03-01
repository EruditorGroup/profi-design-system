import React, {forwardRef, useCallback} from 'react';
import type {ForwardRefExoticComponent, RefAttributes} from 'react';
import InputMask, {Props as InputMaskProps} from 'react-input-mask';
import classnames from 'classnames';

import useFloatLabel from './hooks/useFloatLabel';

import styles from './Input.module.scss';

export interface InputProps {
  noMargin?: boolean;
  label?: string;
  withFloatLabel?: boolean;
  placeholder?: string;
  block?: boolean;
}

const Input: ForwardRefExoticComponent<
  InputProps & Partial<InputMaskProps> & RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {
      className,
      placeholder,
      withFloatLabel,
      block = true,
      mask,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [isFloated, onFocusProxy, onBlurProxy] = useFloatLabel(
      onFocus,
      onBlur,
    );

    const InputComponent = useCallback(
      (inputProps: InputMaskProps | InputProps) => {
        return mask ? (
          <InputMask {...(inputProps as InputMaskProps)} mask={mask} />
        ) : (
          <input {...inputProps} />
        );
      },
      [mask],
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
          ref,
          onFocus: onFocusProxy,
          onBlur: onBlurProxy,
          placeholder: withFloatLabel ? '' : placeholder,
          className: classnames(
            styles['input'],
            withFloatLabel && styles['input-withFloatLabel'],
          ),
          ...props,
        })}
      </div>
    );
  },
);

export default Input;
