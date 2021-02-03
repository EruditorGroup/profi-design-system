import React from 'react';
import classnames from 'classnames';

import styles from './index.module.css';

type LoaderProps = {
  variant?: 'dots' | 'line';
};

export default function Loader({variant}: LoaderProps): React.ReactElement {
  return (
    <div
      title="loader"
      className={classnames(styles['loader'], styles[`loader_${variant}`])}
    />
  );
}
