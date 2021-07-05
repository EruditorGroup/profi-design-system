import React from 'react';
import cx from 'classnames';
import Space from '../../Space';
import Button, {ButtonProps} from '../../Button';
import Dropdown from '../../Dropdown';
import Text from '../../Typography/Text';

import {SelectProps, useSelectContext} from '../index';

import styles from './SelectOption.module.scss';

interface SelectOptionProps extends Omit<ButtonProps, 'as' | 'size'> {
  className?: string;
  value: string;
  disabled?: boolean;
  isActive?: string;
  children?: React.ReactNode;
  size?: SelectProps['size'];
}

const SelectOption = ({
  className,
  disabled,
  size = 'm',
  children,
  value: propValue,
  defaultValue,
  ...props
}: SelectOptionProps): React.ReactElement => {
  const {setValue, value} = useSelectContext();

  return (
    <Dropdown.Item
      closable={!disabled}
      regular
      as={Button}
      design="transparent"
      contentClassName={styles['btn-content']}
      size={size}
      disabled={disabled}
      className={cx(
        className,
        styles['item'],
        propValue === value && styles['active'],
      )}
      {...props}
      onClick={() => setValue(propValue)}
    >
      {children}
    </Dropdown.Item>
  );
};

export default SelectOption;
