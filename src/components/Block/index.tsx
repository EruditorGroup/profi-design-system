import React, {forwardRef} from 'react';
import type {HTMLAttributes} from 'react';
import classnames from 'classnames';
import styles from './Block.module.scss';

export type BlockProps = HTMLAttributes<HTMLDivElement>;

const Block = forwardRef<HTMLDivElement, BlockProps>(
  ({className, ...props}, ref) => {
    return (
      <div
        className={classnames(styles['block'], className)}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Block;
