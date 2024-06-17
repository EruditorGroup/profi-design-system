import type {BaseControlProps} from '../types';
import type {FormControlSize} from '../FormControl';
import type {
  NumberFormatBaseProps,
  NumberFormatValues,
} from 'react-number-format';

export interface BareInputProps
  extends Omit<
      NumberFormatBaseProps,
      'defaultValue' | 'value' | 'mask' | 'format' | 'size' | 'type'
    >,
    BaseControlProps<HTMLInputElement> {
  withFocusScroll?: boolean;
  type?: string;
  mask?: string;
  customMaskFormatter?: (formattedValue: string) => string;
  onMaskedValueChange?: (values: NumberFormatValues) => void;
  getMaskedCaretBoundary?: NumberFormatBaseProps['getCaretBoundary'];
  size?: FormControlSize;
}
