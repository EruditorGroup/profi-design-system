import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const ArrowRightIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M2.75 9H16.75M16.75 9L10.75 3M16.75 9L10.75 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ArrowRightIcon.displayName = 'ArrowRightIcon';

export default ArrowRightIcon;
