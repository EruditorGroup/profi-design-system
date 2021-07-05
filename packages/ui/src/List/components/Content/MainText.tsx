import cx from 'classnames';
import common from '../../../styles/common.module.css';
import React from 'react';
import styles from './Content.module.scss';
import {useListContext} from '../..';
import {useListItemContext} from '../ListItem';

export const MainText: React.FC = (props) => {
  const {children} = props;
  const {size} = useListContext();
  const {disabled} = useListItemContext();

  return (
    <div
      className={cx(
        styles['main-text'],
        common[`size-${size}`],
        disabled ? common['color-disabled'] : common['color-secondary'],
      )}
    >
      {children}
    </div>
  );
};
