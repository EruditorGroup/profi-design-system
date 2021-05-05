import React, {forwardRef} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import classnames from 'classnames';
import styles from './Block.module.scss';

export type BlockProps = HTMLAttributes<HTMLDivElement>;
// test
const Block: ForwardRefExoticComponent<
  BlockProps & RefAttributes<HTMLDivElement>
> = forwardRef(({className, ...props}, ref) => {
  return (
    <div
      className={classnames(styles['block'], className)}
      ref={ref}
      {...props}
    />
  );
});

export default Block;
