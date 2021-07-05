import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import cx from 'classnames';

import SelectOption from './components/SelectOption';

import Dropdown from '../Dropdown';
import {FormControlProps, Input, InputProps} from '../Form';

import styles from './Select.module.css';
import {usePersistCallback} from '../../../toolkit/es';

export interface SelectProps extends Omit<InputProps, 'readonly' | 'onChange'> {
  startScrollFrom?: string;
  defaultOpened?: boolean;
  defaultValue?: string;
  size?: InputProps['size'];
  onChange?: (value: string) => void;
}

interface SelectComponent extends React.FC<SelectProps> {
  Option: typeof SelectOption;
}

type ISelectContext = {
  value: string;
  setValue: (value: string) => void;
};

const SelectContext = createContext<ISelectContext | null>(null);

export const useSelectContext = (): ISelectContext => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('Context "SelectContext" not found');
  return context;
};

const Select: SelectComponent = function Select({
  startScrollFrom,
  defaultValue = '',
  children,
  onChange,
  defaultOpened,
  block = false,
  size,
  className,
  ...props
}) {
  const [opened, setOpened] = useState(defaultOpened);
  const [value, setValue] = useState(defaultValue);
  const context = useMemo(() => ({value, setValue}), [value, setValue]);

  useEffect(() => onChange && onChange(value), [value]);

  const {leading, trailing, inputRef, withFloatLabel, invalid} = props;
  const togglerProps = useMemo<InputProps>(
    () => ({
      leading,
      trailing,
      block,
      size,
      value,
      inputRef,
      withFloatLabel,
      invalid,
      readOnly: true,
    }),
    [leading, trailing, block, size, value, inputRef, withFloatLabel, invalid],
  );

  return (
    <SelectContext.Provider value={context}>
      <Dropdown
        defaultOpened={defaultOpened}
        onChange={(isOpened) => setOpened(isOpened)}
        className={cx(styles['inner'], block && styles['block'])}
        {...props}
      >
        <Dropdown.Toggler
          as={Input}
          inputClassName={styles['input']}
          className={cx(
            styles['toggler'],
            opened && styles['opened'],
            className,
          )}
          {...togglerProps}
        />
        {children && (
          <Dropdown.Portal block animated={false} className={styles['options']}>
            {children}
          </Dropdown.Portal>
        )}
      </Dropdown>
    </SelectContext.Provider>
  );
};

Select.Option = SelectOption;

export default Select;
