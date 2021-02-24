import React, {useCallback, useContext, forwardRef} from 'react';
import type {
  HTMLAttributes,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';
import classNames from 'classnames';
import {DropdownContext} from 'components/Dropdown';

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
    // Content should be positioned near the toggler ref
    <div
      ref={(el) => {
        if (context) context.togglerRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref?.current) ref.current = el;
      }}
      onClick={onClickHandler}
      className={classNames(styles['toggler'], className)}
      {...props}
    />
  );
});

export default DropdownToggler;
