import React, {
  useCallback,
  useContext,
  forwardRef,
  HTMLAttributes,
} from 'react';
import classNames from 'classnames';
import {DropdownContext} from '../..';

import styles from './DropdownToggler.module.scss';
import {ForwardingComponent, AliasProps} from '@eruditorgroup/profi-toolkit';

const DropdownToggler: ForwardingComponent<
  'div',
  HTMLAttributes<HTMLDivElement> & AliasProps
> = forwardRef(({className, as: Component = 'div', ...props}, ref) => {
  const context = useContext(DropdownContext);

  // Proxy handler for trigger context state
  const onClickHandler = useCallback(() => {
    console.log('click');
    if (context?.trigger === 'click') {
      context?.setOpened(!context.isOpened);
    }
  }, [context]);

  return (
    <Component
      ref={ref}
      onClick={onClickHandler}
      className={classNames(styles['toggler'], className)}
      {...props}
    />
  );
});

export default DropdownToggler;
