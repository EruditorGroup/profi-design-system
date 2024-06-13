import React from 'react';
import NumberFormat from 'react-number-format';

import type {BareInputProps} from './types';

type MaskedInputProps = {setRef: (el: HTMLInputElement) => void} & Omit<
  BareInputProps,
  'size' | 'value' | 'defaultValue'
>;

export const MaskedInput: React.FC<MaskedInputProps> = ({
  setRef,
  customMaskFormatter,
  onMaskedValueChange,
  mask,
  type,
  ...props
}) => {
  const onValueChange = (values) => {
    const formattedValue = customMaskFormatter
      ? customMaskFormatter(values.formattedValue)
      : values.formattedValue;

    onMaskedValueChange?.({
      ...values,
      formattedValue,
    });
  };

  return (
    <NumberFormat
      {...props}
      getInputRef={setRef}
      onValueChange={onValueChange}
      format={mask}
      mask="_"
      type={type as 'text' | 'tel' | 'password'}
    />
  );
};
