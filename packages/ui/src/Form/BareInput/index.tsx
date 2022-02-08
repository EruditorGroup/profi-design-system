import React, {useCallback} from 'react';
// import InputMask, {Props as InputMaskProps, InputState} from 'react-input-mask';
import NumberFormat, {NumberFormatProps} from 'react-number-format';
import {useFocusScroll, useCombinedRef} from '@eruditorgroup/profi-toolkit';
import classnames from 'classnames';

import styles from './BareInput.module.scss';

import type {BaseControlProps} from '../types';

export interface BareInputProps
  extends Omit<NumberFormatProps, 'defaultValue' | 'value' | 'mask' | 'format'>,
    BaseControlProps<HTMLInputElement> {
  withFocusScroll?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  mask?: string;
}

const BareInput: React.FC<BareInputProps> = ({
  className,
  type = 'text',
  mask,
  withFocusScroll,
  inputRef,
  ...props
}) => {
  const [ref, setRef] = useCombinedRef<HTMLInputElement>(inputRef);

  useFocusScroll(ref, withFocusScroll);

  const InputComponent = useCallback(
    (inputProps: Omit<BareInputProps, 'size'>) =>
      mask ? (
        <NumberFormat {...inputProps} getInputRef={setRef} format={mask} />
      ) : (
        <input {...inputProps} ref={setRef} />
      ),
    [mask, setRef],
  );

  return InputComponent({
    className: classnames(styles['input'], 'input-default', className),
    type,
    ...props,
  });
};

export default BareInput;
