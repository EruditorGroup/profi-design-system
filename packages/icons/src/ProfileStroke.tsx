import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const ProfileStrokeIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        fill="none"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <circle
          cx="8"
          cy="7.5"
          r="6.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          d="M4.11 12.65c-.02-.25.04-.5.21-.75A4.43 4.43 0 0 1 8 10.04c1.56 0 2.92.74 3.68 1.86.22.32.26.64.17.94M9.95 6a1.94 1.94 0 1 1-3.9 0 1.94 1.94 0 0 1 3.9 0Z"
        />
      </svg>
    );
  },
);

ProfileStrokeIcon.displayName = 'ProfileStrokeIcon';

export default ProfileStrokeIcon;
