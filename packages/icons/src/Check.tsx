import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const CheckIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M2.5 8.25L6.7 12.25L14 3.25"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
);

CheckIcon.displayName = 'CheckIcon';

export default CheckIcon;
