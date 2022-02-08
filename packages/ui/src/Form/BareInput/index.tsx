import React, {useCallback} from 'react';
import NumberFormat, {NumberFormatProps} from 'react-number-format';
import {useFocusScroll, useCombinedRef} from '@eruditorgroup/profi-toolkit';
import classnames from 'classnames';

import styles from './BareInput.module.scss';

import type {BaseControlProps} from '../types';
import type {FormControlSize} from '../FormControl';

export interface BareInputProps
  extends Omit<
      NumberFormatProps,
      'defaultValue' | 'value' | 'mask' | 'format' | 'size' | 'type'
    >,
    BaseControlProps<HTMLInputElement> {
  withFocusScroll?: boolean;
  type?: string;
  mask?: string;
  size?: FormControlSize;
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
    (inputProps: Omit<BareInputProps, 'size' | 'value' | 'defaultValue'>) =>
      mask ? (
        <NumberFormat
          {...inputProps}
          getInputRef={setRef}
          format={mask}
          type={inputProps.type as 'text' | 'tel' | 'password'}
        />
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
