import React, {CSSProperties, useMemo, useRef} from 'react';
import type {ReactNode} from 'react';
import classnames from 'classnames';

import BareInput from '../BareInput';
import type {BareInputProps} from '../BareInput';

import styles from './BareInputUnit.module.scss';

const UNIT_TO_INPUT_MARGIN = 4;

export type BareInputUnitProps = BareInputProps & {
  withFloatLabel?: boolean;
  unit: ReactNode;
  unitClassName?: string;
  unitStyle?: CSSProperties;
};

const BareInputUnit: React.FC<React.PropsWithChildren<BareInputUnitProps>> = ({
  unit,
  unitClassName,
  unitStyle,
  value,
  placeholder,
  className,
  onChange,
  inputRef,
  ...props
}) => {
  const unitRef = useRef<HTMLSpanElement>(null);

  const {width} = unitRef.current?.getBoundingClientRect() || {};

  const overflowUnitPadStyles = {
    paddingRight: width ? `${width + UNIT_TO_INPUT_MARGIN}px` : undefined,
  };

  const mask = useMemo(() => {
    return value?.toString() || placeholder?.toString();
  }, [value, placeholder]);

  return (
    <div
      className={classnames(styles['input-unit'])}
      style={overflowUnitPadStyles}
    >
      <BareInput
        inputRef={inputRef}
        {...props}
        value={value}
        placeholder={placeholder}
        className={classnames(styles['input-unit__input'], className)}
        onChange={onChange}
      />
      <div className={classnames(styles['input-unit__stretcher'])}>
        <span className={styles['input-unit__value']}>{mask}</span>
        <span
          ref={unitRef}
          className={classnames(styles['input-unit__unit'], unitClassName)}
          style={unitStyle}
        >
          {mask > '' && unit}
        </span>
      </div>
    </div>
  );
};

export default BareInputUnit;
