import React from 'react';
import {NumberFormatBase, usePatternFormat} from 'react-number-format';

import type {BareInputProps} from './types';

type MaskedInputProps = {setRef: (el: HTMLInputElement) => void} & Omit<
  BareInputProps,
  'size' | 'value' | 'defaultValue'
>;

export const MaskedInput: React.FC<MaskedInputProps> = ({
  setRef,
  mask,
  type,
  onMaskedValueChange,
  customMaskFormatter,
  getMaskedCaretBoundary,
  ...props
}) => {
  const {format} = usePatternFormat({mask: '_', format: mask});

  const _format = (inputValue: string) => {
    if (customMaskFormatter) {
      return format(customMaskFormatter(inputValue));
    }

    return format(inputValue);
  };

  return (
    <NumberFormatBase
      {...props}
      getInputRef={setRef}
      onValueChange={onMaskedValueChange}
      format={_format}
      type={type as 'text' | 'tel' | 'password'}
      getCaretBoundary={getMaskedCaretBoundary}
    />
  );
};
