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

export interface SelectProps
  extends Omit<InputProps, 'readonly' | 'onChange' | 'defaultValue'> {
  startScrollFrom?: number;
  defaultOpened?: boolean;
  defaultValue?: ISelectValue;
  wrapperClassName?: string;
  size?: InputProps['size'];
  optionsRef?: React.MutableRefObject<HTMLDivElement | undefined>;
  onChange?: (value: string) => void;
}

interface SelectComponent extends React.FC<SelectProps> {
  Option: typeof SelectOption;
}

type ISelectValue = {value: string; label: string};
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
  defaultValue,
  children,
  onChange,
  defaultOpened,
  block = false,
  size = 'm',
  className,
  wrapperClassName,
  optionsRef,
  ...props
}) {
  const [opened, setOpened] = useState(defaultOpened);
  const [{value, label}, setValue] = useState<ISelectValue>(defaultValue);
  const context = useMemo(() => ({value, setValue}), [value, setValue]);
  const _optionsRef = useRef<HTMLDivElement>();
  if (optionsRef) optionsRef.current = _optionsRef.current;

  const _onChange = useRef(onChange);
  _onChange.current = onChange;
  useEffect(() => _onChange.current?.(value), [value]);

  useLayoutEffect(() => {
    if (startScrollFrom) {
      _optionsRef.current?.scrollTo(0, startScrollFrom * itemsSize);
    }
  }, [startScrollFrom, size]);

  const {leading, trailing, inputRef, withFloatLabel, invalid} = props;
  const togglerProps = useMemo<InputProps>(
    () => ({
      leading,
      trailing,
      block,
      size,
      inputRef,
      withFloatLabel,
      invalid,
      value: label,
      readOnly: true,
    }),
    [leading, trailing, block, size, label, inputRef, withFloatLabel, invalid],
  );

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
