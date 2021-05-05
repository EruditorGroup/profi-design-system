import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const MoreHorizontalIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
        <circle cx="9" cy="15" r="2" fill="currentColor" />
        <circle cx="9" cy="8.5" r="2" fill="currentColor" />
        <circle cx="9" cy="2" r="2" fill="currentColor" />
      </svg>
    );
  },
);

MoreHorizontalIcon.displayName = 'MoreHorizontalIcon';

export default MoreHorizontalIcon;
