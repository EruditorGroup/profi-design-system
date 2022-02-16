import React, {forwardRef, createContext, useContext} from 'react';
import cx from 'classnames';
import styles from './Row.module.scss';

import type {HTMLAttributes} from 'react';

export type Gutter = 10 | 30 | 45;
export type GutterSettings = {[breakpoint in 's' | 'm' | 'l']: Gutter} | Gutter;

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gutter?: GutterSettings;
}

const RowGutterContext = createContext<GutterSettings | void>(undefined);
export const useRowGutter = (): GutterSettings | void => {
  const gutter = useContext(RowGutterContext);
  return gutter;
};

const getRowGutterClassNames = (gutterSettings: GutterSettings | void) => {
  if (!gutterSettings) return styles['row_gutter-default'];

  if (typeof gutterSettings === 'object') {
    return Object.entries(gutterSettings).map(
      (breakpoint, gutter) => styles[`row_${breakpoint}-gutter-${gutter}`],
    );
  } else {
    return styles[`row_gutter-${gutterSettings}`];
  }
};

const Row = forwardRef<HTMLDivElement, RowProps>(function Row(
  {children, className, gutter, ...props},
  ref,
) {
  return (
    <RowGutterContext.Provider value={gutter}>
      <div
        {...props}
        ref={ref}
        className={cx(className, styles['row'], getRowGutterClassNames(gutter))}
      >
        {children}
      </div>
    </RowGutterContext.Provider>
  );
});

export default Row;
