import React, {useCallback, useRef} from 'react';
import InputMask, {Props as InputMaskProps, InputState} from 'react-input-mask';
import {useFocusScroll, useCombinedRef} from '@eruditorgroup/profi-toolkit';
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
  const [ref, setRef] = useCombinedRef<HTMLInputElement>(inputRef);

  useFocusScroll(ref, withFocusScroll);

  const InputComponent = useCallback(
    (inputProps: Omit<BareInputProps, 'size'>) =>
      mask ? (
        <InputMask
          {...inputProps}
          inputRef={setRef}
          mask={mask}
          alwaysShowMask={alwaysShowMask}
        />
      ) : (
        <input {...inputProps} ref={setRef} />
      ),
    [mask, alwaysShowMask, setRef],
  );

  return InputComponent({
    className: classnames(styles['input'], 'input-default', className),
    type,
    ...props,
  });
};

export default BareInput;
