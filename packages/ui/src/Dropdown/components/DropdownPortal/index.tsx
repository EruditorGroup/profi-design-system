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
  block?: boolean;
  position?:
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right'
    | 'from-bottom';
  fit?: boolean;
}

const DropdownPortal: ForwardRefExoticComponent<
  DropdownPortalProps & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      animated = true,
      style,
      position = 'bottom-left',
      fit,
      className,
      block,
      ...props
    },
    ref,
  ) => {
    const _ref = useRef<HTMLDivElement | null>(null);
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
          block && styles['block'],
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
          className={classNames(
            styles['dropdown-area'],
            fit && styles['fit'],
            className,
          )}
          {...props}
          style={{...style}}
        />
      </div>
    );
  },
);

export default DropdownPortal;
