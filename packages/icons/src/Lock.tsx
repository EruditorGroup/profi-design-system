import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const LockIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        fill="none"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...combineCommonProps(props)}
      >
        <path
          fill="currentColor"
          d="M3.5 7.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-3Z"
        />
        <rect
          width="5.5"
          height="5.5"
          x="5.25"
          y="3.25"
          stroke="currentColor"
          strokeWidth="1.5"
          rx="2.75"
        />
      </svg>
    );
  },
);

LockIcon.displayName = 'LockIcon';

export default LockIcon;
