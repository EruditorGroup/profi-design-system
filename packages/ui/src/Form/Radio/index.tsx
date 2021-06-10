import React, {forwardRef} from 'react';
import Checkbox from '../Checkbox';

import type {CheckboxProps} from '../Checkbox';

export interface RadioProps extends CheckboxProps {
  name: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref,
) {
  return <Checkbox {...props} type="radio" ref={ref} />;
});

export default Radio;
