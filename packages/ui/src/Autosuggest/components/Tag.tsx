import React, {isValidElement, useMemo} from 'react';

import {ISize} from '@eruditorgroup/profi-toolkit';
import {CloseIcon} from '@eruditorgroup/profi-icons';

import Text from '../../Typography/Text';

import styles from './Tag.module.scss';

type IIconPrefixFormat = 'base64Svg' | 'base64Png';
type IIcon = {url: string; prefix?: IIconPrefixFormat};
interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ISize;
  icon?: React.ReactNode | IIcon;
  onDelete?: () => void;
}

function getIconUrlPrefix(format?: IIconPrefixFormat): string {
  switch (format) {
    case 'base64Svg':
      return `data:image/svg+xml;base64,`;
    case 'base64Png':
      return `data:image/png;base64,`;
    default:
      return '';
  }
}

function getUrl(icon: IIcon): string {
  return `url(${getIconUrlPrefix(icon.prefix)}${icon.url}})`;
}

const Tag: React.FC<TagProps> = function Tag({
  size = 'l',
  children,
  onDelete,
  icon,
  ...props
}) {
  return (
    <div className={styles['tag']} onClick={onDelete} {...props}>
      {icon && (
        <div className={styles['leading']}>
          {React.isValidElement(icon) ? (
            icon
          ) : (
            <i
              className={styles['icon']}
              style={{backgroundImage: getUrl(icon as IIcon)}}
            />
          )}
        </div>
      )}
      <Text size={size}>{children}</Text>
      {onDelete && (
        <div className={styles['trailing']}>
          <CloseIcon />
        </div>
      )}
    </div>
  );
};

export default Tag;
