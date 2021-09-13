import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const MicrophoneIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 17 17"
        fill="none"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          d="M5.75 3.3a2.75 2.75 0 1 1 5.5 0v3.95a2.75 2.75 0 1 1-5.5 0V3.3Z"
          fill="currentColor"
        />
        <path
          d="M8.5 13v2.5M6 15.5h5M13.5 7.25a5 5 0 0 1-10 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

MicrophoneIcon.displayName = 'MicrophoneIcon';

export default MicrophoneIcon;
