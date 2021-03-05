import React, {forwardRef, useContext} from 'react';
import type {
  OptionHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import {SelectedValueContext} from '../../Select';

export type SelectOptionProps = OptionHTMLAttributes<HTMLOptionElement>;

const SelectOption: ForwardRefExoticComponent<
  SelectOptionProps & RefAttributes<HTMLOptionElement>
> = forwardRef(({value, ...props}, ref) => {
  const selectedValue = useContext(SelectedValueContext);
  return (
    <option
      ref={ref}
      value={value}
      {...props}
      selected={value === selectedValue}
    />
  );
});

SelectOption.displayName = 'SelectOption';

export default SelectOption;
