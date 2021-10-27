import React, {forwardRef} from 'react';
import cx from 'classnames';
import styles from './Col.module.scss';
import {useRowGutter} from '../Row';

import type {GutterSettings} from '../Row';
import type {HTMLAttributes} from 'react';

//prettier-ignore
type ColOffset = 
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
  | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11';

type ColSpan = ColOffset | 12 | '12';

type ColBreakpoints = 's' | 'm' | 'l';

type BreakpointSettings = ColSpan | ColSettings;

interface ColSettings {
  span?: ColSpan;
  offset?: ColOffset;
}
export interface ColProps
  extends HTMLAttributes<HTMLDivElement>,
    ColSettings,
    Partial<Record<ColBreakpoints, BreakpointSettings>> {}

const getColBreakpointClassNames = (
  breakpoint: ColBreakpoints,
  settings?: BreakpointSettings,
) =>
  cx(
    settings &&
      (typeof settings === 'object'
        ? [
            settings.span && styles[`col_${breakpoint}-span-${settings.span}`],
            settings.offset &&
              styles[`col_${breakpoint}-offset-${settings.offset}`],
          ]
        : styles[`col_${breakpoint}-span-${settings}`]),
  );

const getColGutterClassNames = (gutterSettings: GutterSettings | void) => {
  if (!gutterSettings) return styles['col_gutter-default'];

  if (typeof gutterSettings === 'object') {
    return Object.entries(gutterSettings).map(
      (breakpoint, gutter) => styles[`col_${breakpoint}-gutter-${gutter}`],
    );
  } else {
    return styles[`col_gutter-${gutterSettings}`];
  }
};

const Col = forwardRef<HTMLDivElement, ColProps>(function Col(
  {children, className, span, offset, s, m, l, ...props},
  ref,
) {
  const gutter = useRowGutter();
  return (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        styles['col'],
        span && styles[`col_span-${span}`],
        offset && styles[`col_offset-${offset}`],
        getColBreakpointClassNames('s', s),
        getColBreakpointClassNames('m', m),
        getColBreakpointClassNames('l', l),
        getColGutterClassNames(gutter),
      )}
    >
      {children}
    </div>
  );
});

export default Col;
