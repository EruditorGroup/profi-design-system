import React, {useCallback, useContext, forwardRef} from 'react';
import classNames from 'classnames';
import {DropdownContext} from '../..';

import styles from './DropdownToggler.module.scss';
import {ForwardingComponent} from 'uitype';

const DropdownToggler: ForwardingComponent<
  'div',
  {children: React.ReactNode}
> = forwardRef(({className, as: Component = 'div', ...props}, ref) => {
  const context = useContext(DropdownContext);

  // Proxy handler for trigger context state
  const onClickHandler = useCallback(() => {
    context?.setOpened(!context.isOpened);
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
