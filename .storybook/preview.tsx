import React from 'react';
import styles from '../src/styles/theme.scss';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
};

export const decorators = [
  (Story) => (
    <div className={styles['theme-profi']}>
      <Story />
    </div>
  ),
];
