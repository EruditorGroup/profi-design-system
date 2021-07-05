import React, {useCallback, useContext, forwardRef} from 'react';
import {DropdownContext} from '../..';

import type {
  ForwardingComponent,
  AliasProps,
} from '@eruditorgroup/profi-toolkit';

export interface DropdownItemProps
  extends React.HTMLAttributes<Omit<HTMLDivElement, 'align'>>,
    AliasProps {
  closable?: boolean;
}

const DropdownItem: ForwardingComponent<'div', DropdownItemProps> = forwardRef(
  (
    {
      className,
      as: Component = 'div',
      closable,
      onClick: onClickOrigin,
      ...props
    },
    ref,
  ) => {
    const context = useContext(DropdownContext);
    const onClickHandler = useCallback(
      (e) => {
        if (onClickOrigin) onClickOrigin(e);
        if (closable) context?.setOpened(!context.isOpened);
      },
      [context, closable, onClickOrigin],
    );

    return (
      <Component
        ref={ref}
        className={className}
        onClick={onClickHandler}
        {...props}
      />
    );
  },
);

export default DropdownItem;
