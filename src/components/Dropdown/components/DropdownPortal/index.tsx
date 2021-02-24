import React, {useContext, forwardRef} from 'react';
import type {RefAttributes, ForwardRefExoticComponent} from 'react';
import {DropdownContext} from 'components/Dropdown';
import BodyPortal from '../../../BodyPortal';
import type {BodyPortalProps} from '../../../BodyPortal';
import classNames from 'classnames';

import styles from './DropdownPortal.module.scss';
import useRelativePosition from 'hooks/useRelativePosition';

export interface DropdownPortalProps extends BodyPortalProps {
  animated?: boolean;
}

const DropdownPortal: ForwardRefExoticComponent<
  DropdownPortalProps & RefAttributes<HTMLDivElement>
> = forwardRef(({animated = true, className, ...props}, ref) => {
  const context = useContext(DropdownContext);
  const relativePosition = useRelativePosition(
    context?.togglerRef?.current,
    context?.horizontalPosition || 'left',
  );

  return (
    <BodyPortal
      style={relativePosition}
      ref={(el) => {
        if (context) context.contentRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref?.current) ref.current = el;
      }}
      className={classNames(
        styles['portal'],
        styles[`horizontal-${context?.horizontalPosition}`],
        animated && styles['animated'],
        context?.isOpened && styles['opened'],
        className,
      )}
      {...props}
    />
  );
});

export default DropdownPortal;
