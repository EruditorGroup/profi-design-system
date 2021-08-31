import React from 'react';
import {Text} from '../../../Typography';

import styles from './Content.module.scss';

export const Caption: React.FC = (props) => {
  const {children} = props;

  return (
    <Text as="div" size="s" color="muted" className={styles['caption']}>
      {children}
    </Text>
  );
};
