import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const LockStrokeIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          stroke="currentColor"
          strokeWidth="1.5"
          d="M3.12 7.5a.75.75 0 0 1 .75-.75h8.26a.75.75 0 0 1 .75.75v3.759a2.75 2.75 0 0 1-2.75 2.75H5.87a2.75 2.75 0 0 1-2.75-2.75V7.5ZM5 6V4.737C5 3.225 6.343 2 8 2s3 1.225 3 2.737V6"
        />
      </svg>
    );
  },
);

LockStrokeIcon.displayName = 'LockStrokeIcon';

export default LockStrokeIcon;
