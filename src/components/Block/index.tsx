import React, {forwardRef} from 'react';
import styles from './Block.module.scss';

export type BlockProps = React.HTMLAttributes<HTMLDivElement>;

const Block: React.ForwardRefExoticComponent<
  BlockProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(({className, ...props}, ref) => {
  return (
    <div className={`${styles['block']} ${className}`} ref={ref} {...props} />
  );
});

export default Block;
