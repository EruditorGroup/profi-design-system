import React, {useCallback} from 'react';
import type {InputHTMLAttributes} from 'react';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

import styles from './BareInput.module.scss';

import type {BaseControlProps} from '../types';

export type BareInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  BaseControlProps<HTMLInputElement> & {
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
  };

const BareInput: React.FC<BareInputProps> = ({
  className,
  mask,
  alwaysShowMask,
  inputRef,
  ...props
}) => {
  const InputComponent = useCallback(
    (inputProps: Omit<BareInputProps, 'size'>) =>
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

  return InputComponent({
    className: classnames(styles['input'], className),
    ...props,
  });
};

export default BareInput;
