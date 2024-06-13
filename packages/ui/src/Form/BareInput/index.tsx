import React, {useCallback} from 'react';
import classnames from 'classnames';

import {useFocusScroll, useCombinedRef} from '@eruditorgroup/profi-toolkit';
import {MaskedInput} from './MaskedInput';

import styles from './BareInput.module.scss';

import type {BaseControlProps} from '../types';
import type {FormControlSize} from '../FormControl';
import type {NumberFormatProps, NumberFormatValues} from 'react-number-format';

export interface BareInputProps
  extends Omit<
      NumberFormatProps,
      'defaultValue' | 'value' | 'mask' | 'format' | 'size' | 'type'
    >,
    BaseControlProps<HTMLInputElement> {
  withFocusScroll?: boolean;
  type?: string;
  mask?: string;
  customMaskFormatter?: (formattedValue: string) => string;
  onMaskedValueChange?: (values: NumberFormatValues) => void;
  size?: FormControlSize;
}

const BareInput: React.FC<React.PropsWithChildren<BareInputProps>> = ({
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
    ({
      customMaskFormatter,
      onMaskedValueChange,
      type,
      ...inputProps
    }: Omit<BareInputProps, 'size' | 'value' | 'defaultValue'>) =>
      mask ? (
        <MaskedInput
          {...inputProps}
          setRef={setRef}
          customMaskFormatter={customMaskFormatter}
          onMaskedValueChange={onMaskedValueChange}
          mask={mask}
          type={type}
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
