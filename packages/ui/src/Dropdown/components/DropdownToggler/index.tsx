import React, {useCallback, useContext, forwardRef} from 'react';
import type {
  HTMLAttributes,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';
import classNames from 'classnames';
import {DropdownContext} from '../..';

import styles from './DropdownToggler.module.scss';

export type DropdownTogglerProps = HTMLAttributes<HTMLDivElement>;

const DropdownToggler: ForwardRefExoticComponent<
  DropdownTogglerProps & RefAttributes<HTMLDivElement>
> = forwardRef(({className, ...props}, ref) => {
  const context = useContext(DropdownContext);

  // Proxy handler for trigger context state
  const onClickHandler = useCallback(() => {
    context?.setOpened(!context.isOpened);
  }, [context]);

  return (
    <div
      ref={ref}
      onClick={onClickHandler}
      className={classNames(styles['toggler'], className)}
      {...props}
    />
  );
});

export default DropdownToggler;
