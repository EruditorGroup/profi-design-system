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

function toSnakeCase(camelCase: string): string {
  return camelCase.replace(/([A-Z])/g, '-$1').toLowerCase();
}

export default function DropdownPortal({
  children,
  className,
}: DropdownPortalProps): React.ReactElement {
  const context = useContext(DropdownContext);
  const relativePosition = useRelativePosition(context?.togglerRef?.current);

  const css = useMemo(
    () =>
      Object.entries(relativePosition ?? {})
        .map(([k, v]) => `${toSnakeCase(k)}:${v}`)
        .join(';'),
    [relativePosition],
  );

  return (
    <BodyPortal
      style={css}
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
