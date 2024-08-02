import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const ActiveDotIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 28 28"
        fill="none"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <circle cx="14" cy="14" r="6" fill="currentColor" />
        <circle cx="14" cy="14" r="9.5" stroke="currentColor" />
      </svg>
    );
  },
);

ActiveDotIcon.displayName = 'ActiveDotIcon';

export default ActiveDotIcon;
