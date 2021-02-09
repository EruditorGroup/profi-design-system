import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './ButtonGroup.module.scss';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
}

const ButtonGroup: React.ForwardRefExoticComponent<
  ButtonGroupProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(({className, block, ...props}, ref) => {
  return (
    <div
      ref={ref}
      className={classnames(
        styles['group'],
        block && styles['block'],
        className,
      )}
      {...props}
    />
  );
});

export default ButtonGroup;
