import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const PersonIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  ({width = '20', height = '20', color, ...props}, ref) => {
    return (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        style={{color}}
        ref={ref}
        width={width}
        height={height}
        {...props}
      >
        <circle cx="10.5" cy="6.5" r="2.5" fill="currentColor" />
        <path
          d="M16.5 13.86c0 2.13-2.686 2.64-6 2.64s-6-.51-6-2.64c0-2.132 2.686-3.86 6-3.86s6 1.728 6 3.86z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

PersonIcon.displayName = 'PersonIcon';

export default PersonIcon;
