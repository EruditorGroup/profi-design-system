import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const CalendarIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <rect
          x="4.25"
          y="7.5"
          width="2"
          height="2"
          rx="1"
          fill="currentColor"
        />
        <rect x="7.5" y="7.5" width="2" height="2" rx="1" fill="currentColor" />
        <rect
          x="10.75"
          y="7.5"
          width="2"
          height="2"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="4.25"
          y="10.5"
          width="2"
          height="2"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="7.5"
          y="10.5"
          width="2"
          height="2"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="10.75"
          y="10.5"
          width="2"
          height="2"
          rx="1"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 3H7v.5a1.5 1.5 0 11-3 0V3a2 2 0 00-2 2v8c0 1.1.9 2 2 2h9a2 2 0 002-2V5a2 2 0 00-2-2v.5a1.5 1.5 0 01-3 0V3zM4 6a1 1 0 00-1 1v6a1 1 0 001 1h9a1 1 0 001-1V7a1 1 0 00-1-1H4z"
          fill="currentColor"
        />
        <rect x="5" y="1" width="1" height="3" rx=".5" fill="currentColor" />
        <rect x="11" y="1" width="1" height="3" rx=".5" fill="currentColor" />
      </svg>
    );
  },
);

CalendarIcon.displayName = 'CalendarIcon';

export default CalendarIcon;
