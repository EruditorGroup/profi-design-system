import type { Context, SelectHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
import SelectOption from './components/SelectOption';
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    withFloatLabel?: boolean;
    block?: boolean;
    placeholder?: string;
    selected: Value;
}
export interface SelectComponent extends ForwardRefExoticComponent<SelectProps> {
    Option: typeof SelectOption;
}
declare type Value = string | null;
export declare const SelectedValueContext: Context<Value>;
declare const Select: SelectComponent;
export default Select;
//# sourceMappingURL=index.d.ts.map