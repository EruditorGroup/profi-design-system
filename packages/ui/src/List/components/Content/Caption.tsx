import cx from 'classnames';
import {theme} from '@eruditorgroup/profi-toolkit';
import React from 'react';
import styles from './Content.module.scss';

export const Caption: React.FC = (props) => {
  const {children} = props;

  return (
    <div
      className={cx(
        styles['caption'],
        theme.common['color-muted'],
        theme.common['size-s'],
      )}
    >
      {children}
    </div>
  );
};
