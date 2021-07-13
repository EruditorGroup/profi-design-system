import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {ChevronDownIcon} from '@eruditorgroup/profi-icons';
import cx from 'classnames';

import SelectOption from './components/SelectOption';

import Dropdown from '../Dropdown';
import {Input, InputProps} from '../Form';

import styles from './Select.module.css';

export interface SelectProps
  extends Omit<InputProps, 'readonly' | 'onChange' | 'value'> {
  startScrollFrom?: number;
  defaultOpened?: boolean;
  value: ISelectValue;
  onChange: (value: ISelectValue) => void;
  wrapperClassName?: string;
  size?: InputProps['size'];
  optionsRef?: React.MutableRefObject<HTMLDivElement | undefined>;
}

interface SelectComponent extends React.FC<SelectProps> {
  Option: typeof SelectOption;
}

export type ISelectValue = {value: string; label?: string};
type ISelectContext = {
  value: string;
  setValue: (value: ISelectValue) => void;
};

const SelectContext = createContext<ISelectContext | null>(null);

export const useSelectContext = (): ISelectContext => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('Context "SelectContext" not found');
  return context;
};

const itemsSize = 40;

const Select: SelectComponent = function Select({
  startScrollFrom,
  value: propValue,
  children,
  onChange,
  placeholder,
  defaultOpened,
  block = false,
  size,
  className,
  wrapperClassName,
  inputClassName,
  optionsRef,
  ...props
}) {
  const [opened, setOpened] = useState(defaultOpened);
  const [selected, setValue] = useState<ISelectValue>(propValue);
  const {value, label} = propValue || selected || {};

  const context = useMemo(() => ({value, setValue}), [value, setValue]);
  const _optionsRef = useRef<HTMLDivElement>();
  if (optionsRef) optionsRef.current = _optionsRef.current;

  const _onChange = useRef(onChange);
  _onChange.current = onChange;
  useEffect(() => {
    _onChange.current(selected);
    setValue(selected);
  }, [selected]);

  useLayoutEffect(() => {
    if (startScrollFrom) {
      _optionsRef.current?.scrollTo(0, startScrollFrom * itemsSize);
    }
  }, [startScrollFrom, size]);

  const {leading, trailing, inputRef, withFloatLabel, invalid} = props;

  return (
    <SelectContext.Provider value={context}>
      <Dropdown
        defaultOpened={defaultOpened}
        onChange={(isOpened) => setOpened(isOpened)}
        className={cx(
          styles['inner'],
          block && styles['block'],
          wrapperClassName,
        )}
        {...props}
      >
        <Dropdown.Toggler
          as={Input}
          inputClassName={cx(styles['input'], inputClassName)}
          className={cx(
            styles['toggler'],
            opened && styles['focused'],
            className,
          )}
          leading={leading}
          trailing={trailing || <ChevronDownIcon />}
          block={block}
          size={size}
          inputRef={inputRef}
          withFloatLabel={withFloatLabel}
          invalid={invalid}
          value={label ?? value}
          placeholder={placeholder}
          readOnly
        />
        {children && (
          <Dropdown.Portal
            ref={_optionsRef as React.Ref<HTMLDivElement>}
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
