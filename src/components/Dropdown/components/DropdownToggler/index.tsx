import React, {useCallback, useContext} from 'react';
import type {ReactNode, ReactElement} from 'react';
import {DropdownContext} from 'components/Dropdown';

import styles from './DropdownToggler.module.scss';

export interface DropdownTogglerProps {
  children: ReactNode;
}

export default function DropdownToggler({
  children,
}: DropdownTogglerProps): ReactElement {
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
      }}
      onClick={onClickHandler}
      className={styles['toggler']}
    >
      {children}
    </div>
  );
}
