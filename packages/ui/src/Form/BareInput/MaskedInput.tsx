import React from 'react';
import NumberFormat, {
  NumberFormatProps,
  NumberFormatValues,
} from 'react-number-format';

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
  customMaskFormatter?: (formattedValue: string) => string;
  onMaskedValueChange?: (values: NumberFormatValues) => void;
  size?: FormControlSize;
}

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
