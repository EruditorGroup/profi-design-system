import React, {useContext} from 'react';
import type {ReactElement, ReactNode} from 'react';
import {DropdownContext} from 'components/Dropdown';
import BodyPortal from 'components/BodyPortal';
import classNames from 'classnames';

import styles from './DropdownPortal.module.scss';
import useRelativePosition from 'hooks/useRelativePosition';

interface DropdownPortalProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export default function DropdownPortal({
  children,
  animated = true,
  className,
}: DropdownPortalProps): ReactElement {
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
      }}
      className={classNames(
        styles['portal'],
        styles[`horizontal-${context?.horizontalPosition}`],
        animated && styles['animated'],
        context?.isOpened && styles['opened'],
        className,
      )}
    >
      {children}
    </BodyPortal>
  );
}
