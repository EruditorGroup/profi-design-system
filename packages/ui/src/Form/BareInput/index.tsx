import React, {useCallback} from 'react';
import InputMask, {Props as InputMaskProps, InputState} from 'react-input-mask';
import classnames from 'classnames';

import styles from './BareInput.module.scss';

import type {BaseControlProps} from '../types';

export interface BareInputProps
  extends Omit<InputMaskProps, 'size' | 'mask' | 'inputRef' | 'children'>,
    BaseControlProps<HTMLInputElement> {
  mask?: InputMaskProps['mask'];
  beforeMaskedValueChange?(state: InputState): InputState;
}

const BareInput: React.FC<BareInputProps> = ({
  className,
  type = 'text',
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
          inputRef={inputRef}
          mask={mask}
          alwaysShowMask={alwaysShowMask}
        />
      ) : (
        <input {...inputProps} ref={inputRef} />
      ),
    [mask, alwaysShowMask, inputRef],
  );

  return InputComponent({
    className: classnames(styles['input'], 'input-default', className),
    type,
    ...props,
  });
};

export default BareInput;
