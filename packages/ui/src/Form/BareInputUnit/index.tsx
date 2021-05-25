import React, {
  ChangeEventHandler,
  CSSProperties,
  useRef,
  useState,
} from 'react';
import type {ReactNode} from 'react';
import classnames from 'classnames';

import BareInput from '../BareInput';
import type {BareInputProps} from '../BareInput';

import styles from './BareInputUnit.module.scss';

export type BareInputUnitProps = BareInputProps & {
  withFloatLabel?: boolean;
  unit: ReactNode;
  unitClassName?: string;
  unitStyle?: CSSProperties;
};

const BareInputUnit: React.FC<BareInputUnitProps> = ({
  unit,
  unitClassName,
  unitStyle,
  value,
  defaultValue,
  placeholder,
  className,
  onChange,
  inputRef,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value ?? defaultValue ?? '');
  const unitRef = useRef<HTMLSpanElement>(null);

  const _onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const numericValue = evt.target.value.replace(/[^\d]/g, '');
    if (numericValue === inputValue) return;

    evt.target.value = numericValue;

    onChange && onChange(evt);
    setInputValue(numericValue);
  };

  const overflowUnitPadStyles = {
    paddingRight: unitRef.current
      ? `${unitRef.current.getBoundingClientRect().width + 4}px`
      : undefined,
  };

  return (
    <div
      className={classnames(styles['input-unit'])}
      style={overflowUnitPadStyles}
    >
      <BareInput
        inputRef={inputRef}
        {...props}
        value={inputValue}
        placeholder={placeholder}
        className={classnames(styles['input-unit__input'], className)}
        onChange={_onChange}
      />
      <div className={classnames(styles['input-unit__stretcher'])}>
        <span className={styles['input-unit__value']}>{inputValue}</span>
        <span
          ref={unitRef}
          className={classnames(styles['input-unit__unit'], unitClassName)}
          style={unitStyle}
        >
          {!placeholder || inputValue ? unit : ''}
        </span>
      </div>
    </div>
  );
};

export default BareInputUnit;
