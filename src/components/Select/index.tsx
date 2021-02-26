import React, {forwardRef, createContext} from 'react';
import type {
  Context,
  SelectHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';
import styles from './Select.module.scss';
import SelectOption from './components/SelectOption';

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    RefAttributes<HTMLSelectElement> {
  withFloatLabel?: boolean;
  block?: boolean;
  placeholder?: string;
  selected: Value;
}

export interface SelectComponent
  extends ForwardRefExoticComponent<SelectProps> {
  Option: typeof SelectOption;
}

type Value = string | null;
export const SelectedValueContext: Context<Value> = createContext<Value>(null);

const Select = forwardRef(
  (
    {
      selected,
      withFloatLabel,
      block,
      className,
      placeholder,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <SelectedValueContext.Provider value={selected}>
        <div className={classnames(styles['root'], block && styles['block'])}>
          <svg
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles['open-icon']}
          >
            <path
              d="M5.5 6C5.5 6 2 4 0 0H11C9 4.00001 5.5 6 5.5 6Z"
              fill="#34363B"
            />
          </svg>
          {withFloatLabel && (
            <div
              className={classnames(
                styles['placeholder'],
                selected && styles['placeholder-floated'],
              )}
            >
              {placeholder}
            </div>
          )}
          <select
            className={classnames(
              block && styles['block'],
              withFloatLabel && styles['select-withFloatLabel'],
              styles['select'],
              className,
            )}
            ref={ref}
            {...props}
          >
            {placeholder && (
              <option
                disabled
                selected
                className={styles['option-placeholder']}
              >
                {!withFloatLabel && placeholder}
              </option>
            )}
            {children}
          </select>
        </div>
      </SelectedValueContext.Provider>
    );
  },
) as SelectComponent;

Select.displayName = 'Select';
Select.Option = SelectOption;

export default Select;
