import React, {useCallback, useRef} from 'react';
import InputMask, {Props as InputMaskProps, InputState} from 'react-input-mask';
import {useFocusScroll} from '@eruditorgroup/profi-toolkit';
import classnames from 'classnames';

import styles from './BareInput.module.scss';

import type {BaseControlProps} from '../types';

export interface BareInputProps
  extends Omit<InputMaskProps, 'size' | 'mask' | 'inputRef' | 'children'>,
    BaseControlProps<HTMLInputElement> {
  mask?: InputMaskProps['mask'];
  withFocusScroll?: boolean;
  beforeMaskedValueChange?(state: InputState): InputState;
}

const BareInput: React.FC<BareInputProps> = ({
  className,
  type = 'text',
  mask,
  alwaysShowMask,
  withFocusScroll,
  inputRef,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>();
  const replaceRef = useCallback(
    (el: HTMLInputElement) => {
      ref.current = el;
      if (typeof inputRef === 'function') inputRef(el);
      else if (inputRef) inputRef.current = el;
    },
    [inputRef],
  );

  useFocusScroll(ref, withFocusScroll);

  const InputComponent = useCallback(
    (inputProps: Omit<BareInputProps, 'size'>) =>
      mask ? (
        <InputMask
          {...inputProps}
          inputRef={replaceRef}
          mask={mask}
          alwaysShowMask={alwaysShowMask}
        />
      ) : (
        <input {...inputProps} ref={replaceRef} />
      ),
    [mask, alwaysShowMask, replaceRef],
  );

  return InputComponent({
    className: classnames(styles['input'], 'input-default', className),
    type,
    ...props,
  });
};

export default BareInput;
