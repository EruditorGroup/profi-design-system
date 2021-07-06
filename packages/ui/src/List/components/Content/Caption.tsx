import cx from 'classnames';
import common from '../../../styles/common.module.css';
import React from 'react';
import styles from './Content.module.scss';

export const Caption: React.FC = (props) => {
  const {children} = props;

  return (
    <div
      className={cx(styles['caption'], common['color-muted'], common['size-s'])}
    >
      {children}
    </div>
  );
};
