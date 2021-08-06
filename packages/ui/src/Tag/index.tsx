import * as React from 'react';
import cx from 'classnames';

import Text from '../Typography/Text';

import {ISize} from '@eruditorgroup/profi-toolkit';

import styles from './Tag.module.scss';

type TagSize = Extract<ISize, 'l' | 'm' | 's'>;

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TagSize;
  active?: boolean;
  current?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  disabled?: boolean;
}

const Tag: React.FC<TagProps> = (props) => {
  const {size = 'm', children, current, leading, trailing, active, disabled, onClick, className, ...rest} = props;

  return (
    <div
      className={cx(
        styles['tag'],
        styles[`size-${size}`],
        current && styles['current'],
        active && styles['active'],
        disabled && styles['disabled'],
        className,
      )}
      aria-disabled={disabled}
      role = "button"
      tabIndex={!disabled && !!onClick ? 0 : undefined}
      onClick={onClick}
      {...rest}
    >
      {leading && <div className={styles['leading']}>{leading}</div>}
      <Text className={cx(disabled && styles['disabled'])} size={size} color={current ? 'light' : undefined}>
        {children}
      </Text>
      {leading && <div className={styles['trailing']}>{trailing}</div>}
    </div>
  );
};

export default Tag;
