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
