import React from 'react';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
};

export const decorators = [
  (Story) => (
    <div className={import('../src/styles/theme.scss')['theme-profi']}>
      <Story />
    </div>
  ),
];
