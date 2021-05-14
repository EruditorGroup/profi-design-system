import React, {useContext, forwardRef, useRef} from 'react';
import classNames from 'classnames';

import type {
  RefAttributes,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from 'react';
import {DropdownContext} from '../../';

import styles from './DropdownPortal.module.scss';
import {useClickOutside} from '@eruditorgroup/profi-toolkit';

export interface DropdownPortalProps extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const DropdownPortal: ForwardRefExoticComponent<
  DropdownPortalProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {animated = true, style, position = 'bottom-left', className, ...props},
    ref,
  ) => {
    const _ref = useRef() as React.MutableRefObject<HTMLDivElement | null>;
    const context = useContext(DropdownContext);

    useClickOutside(_ref, () => {
      if (!context) return;

      const {trigger, isOpened, setOpened} = context;
      if (trigger === 'click') {
        isOpened && setOpened(false);
      }
    });

    return (
      <div
        className={classNames(
          styles['dropdown-portal'],
          animated && styles['animated'],
          styles[`position-${position}`],
          context?.isOpened && styles['opened'],
        )}
      >
        <div
          ref={(el) => {
            _ref.current = el;
            if (typeof ref === 'function') ref(el);
            else if (ref) ref.current = el;
          }}
          className={classNames(styles['dropdown-area'], className)}
          {...props}
          style={{...style}}
        />
      </div>
    );
  },
);

export default DropdownPortal;
