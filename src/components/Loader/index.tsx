import React from 'react';
import cx from 'clsx';

import styles from './index.module.css';

type LoaderProps = {
  variant?: 'dots' | 'line';
};

export default function Loader({variant}: LoaderProps): React.ReactElement {
  return (
    <div
      title="loader"
      className={cx(styles['loader'], styles[`loader_${variant}`])}
    />
  );
}
