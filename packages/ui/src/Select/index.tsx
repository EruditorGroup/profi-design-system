import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import cx from 'classnames';

import SelectOption from './components/SelectOption';

import Dropdown from '../Dropdown';
import {Input, InputProps} from '../Form';

import styles from './Select.module.css';

export interface SelectProps extends Omit<InputProps, 'readonly' | 'onChange'> {
  startScrollFrom?: number;
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

const sizeHeight: Record<NonNullable<InputProps['size']>, number> = {
  s: 35,
  m: 40,
  l: 50,
  xl: 50,
};

const Select: SelectComponent = function Select({
  startScrollFrom,
  defaultValue = '',
  children,
  onChange,
  defaultOpened,
  block = false,
  size = 'm',
  className,
  ...props
}) {
  const [opened, setOpened] = useState(defaultOpened);
  const [value, setValue] = useState(defaultValue);
  const context = useMemo(() => ({value, setValue}), [value, setValue]);
  const portalRef = useRef<HTMLDivElement>();

  const _onChange = useRef(onChange);
  _onChange.current = onChange;
  useEffect(() => _onChange.current?.(value), [value]);

  useLayoutEffect(() => {
    if (startScrollFrom) {
      portalRef.current?.scrollTo(0, startScrollFrom * sizeHeight[size]);
    }
  }, [startScrollFrom, size]);

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
          <Dropdown.Portal
            ref={portalRef as React.Ref<HTMLDivElement>}
            block
            animated={false}
            className={styles['options']}
          >
            {children}
          </Dropdown.Portal>
        )}
      </Dropdown>
    </SelectContext.Provider>
  );
};

Select.Option = SelectOption;

export default Select;
