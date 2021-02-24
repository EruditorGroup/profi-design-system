import React, {forwardRef} from 'react';
import type {
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import styles from './Block.module.scss';

export type BlockProps = HTMLAttributes<HTMLDivElement>;

const Block: ForwardRefExoticComponent<
  BlockProps & RefAttributes<HTMLDivElement>
> = forwardRef(({className, ...props}, ref) => {
  return (
    <div className={`${styles['block']} ${className}`} ref={ref} {...props} />
  );
});

export default Block;
