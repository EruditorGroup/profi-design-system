import cx from 'classnames';
import {theme} from '@eruditorgroup/profi-toolkit';
import React from 'react';
import styles from './Content.module.scss';
import {useListContext} from '../..';
import {useListItemContext} from '../ListItem';

export const MainText: React.FC = (props) => {
  const {children} = props;
  const {size, boldItemMainText} = useListContext();
  const disabled = useListItemContext();

  return (
    <div
      className={cx(
        styles['main-text'],
        theme.common[`size-${size}`],
        theme.common[`color-${disabled ? 'disabled' : 'secondary'}`],
        boldItemMainText && theme.common['bold'],
      )}
    >
      {children}
    </div>
  );
};
