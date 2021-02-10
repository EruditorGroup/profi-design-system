import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import {DropdownContext} from '../../../Dropdown';
import BodyPortal from '../../../BodyPortal';
import classNames from 'classnames';

import styles from './DropdownPortal.module.scss';
import useRelativePosition from '../../../../hooks/useRelativePosition';

interface DropdownPortalProps {
  children: React.ReactNode;
  className?: string;
}

export default function DropdownPortal({
  children,
  className,
}: DropdownPortalProps): React.ReactElement {
  const context = useContext(DropdownContext);
  const relativePosition = useRelativePosition(context?.togglerRef?.current);

  return (
    <BodyPortal
      style={relativePosition}
      ref={(el) => {
        if (context) context.contentRef.current = el;
      }}
      className={classNames(
        styles['portal'],
        context?.isOpened && styles['opened'],
        className,
      )}
    >
      {children}
    </BodyPortal>
  );
}
