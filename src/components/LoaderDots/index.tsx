import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Loader.module.scss';

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {
  // design?: 'dots' | 'line';
  size?: 'extraSmall' | 'small' | 'medium' | 'large';
  color?: 'white' | 'gray';
}

const LoaderDots: React.ForwardRefExoticComponent<LoaderProps> = forwardRef(
  ({size = 'small', color = 'white', ...props}: LoaderProps, ref) => (
    <div
      className={classnames(
        styles['loader'],
        // styles[`design-${design}`],
        styles[`size-${size}`],
      )}
      {...props}
    >
      {Array.from({length: 3}).map((_, i) => (
        <div
          key={i}
          className={[
            styles['dot'],
            styles[`dotSize-${size}`],
            styles[`dotColor-${color}`],
          ].join(' ')}
        />
      ))}
    </div>
  ),
);

export default LoaderDots;
