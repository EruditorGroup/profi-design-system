import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const PhoneStrokeIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          d="M4.66 11.34C.97 7.63.83 4.24 2.12 2.94c.3-.3.84-.73 1.08-.9l.6-.43c.58-.4 1.37-.26 1.77.31L6.74 3.6c.4.57.26 1.37-.31 1.77-1.36.95-2 1.13-.95 2.19l2.97 2.97c1.06 1.05 1.24.41 2.2-.95.4-.57 1.19-.71 1.76-.31l1.67 1.17c.57.4.71 1.19.3 1.76l-.42.6c-.17.25-.6.8-.9 1.09-1.3 1.3-4.69 1.15-8.4-2.54Zm0 0 .05.05m-.05-.05-.05-.05"
        />
      </svg>
    );
  },
);

PhoneStrokeIcon.displayName = 'PhoneStrokeIcon';

export default PhoneStrokeIcon;
