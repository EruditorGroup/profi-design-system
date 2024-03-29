import React from 'react';
import classnames from 'classnames';
import {ISize} from '@eruditorgroup/profi-toolkit';

import Text from '../Typography/Text';

import styles from './GeoTag.module.scss';

type IIconFormat = 'base64Svg' | 'base64Png';
type IIcon = {icon: string; format?: IIconFormat};
export interface GeoTagProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ISize;
  icon?: React.ReactNode | IIcon;
  trailing?: React.ReactNode;
  design?: 'plain' | 'light';
}

function getIconUrlPrefix(format?: IIconFormat): string {
  switch (format) {
    case 'base64Svg':
      return `data:image/svg+xml;base64,`;
    case 'base64Png':
      return `data:image/png;base64,`;
    default:
      return '';
  }
}

function getIcon(iconObj: NonNullable<GeoTagProps['icon']>): React.ReactNode {
  if (React.isValidElement(iconObj)) return iconObj;

  const {format, icon} = iconObj as IIcon;
  return (
    <i
      className={styles['icon']}
      style={{backgroundImage: `url(${getIconUrlPrefix(format)}${icon})`}}
    />
  );
}

const GeoTag: React.FC<React.PropsWithChildren<GeoTagProps>> = function Tag({
  size = 's',
  children,
  trailing,
  icon,
  className,
  design = 'plain',
  ...props
}) {
  return (
    <div
      className={classnames(
        styles['tag'],
        styles[`design-${design}`],
        className,
      )}
      {...props}
    >
      {icon && <div className={styles['leading']}>{getIcon(icon)}</div>}
      <Text size={size}>{children}</Text>
      {trailing && <div className={styles['trailing']}>{trailing}</div>}
    </div>
  );
};

export default GeoTag;
