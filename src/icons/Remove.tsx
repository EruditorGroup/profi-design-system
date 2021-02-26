import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const ProfileIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 7H5l.425 8.079A1.5 1.5 0 006.923 16.5h6.154a1.5 1.5 0 001.498-1.421L15 7zM7.5 9a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zm2 .5a.5.5 0 011 0v4a.5.5 0 01-1 0v-4zm3-.5a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5z"
          fill="currentColor"
        />
        <path d="M4 6a2 2 0 012-2h8a2 2 0 012 2H4z" fill="currentColor" />
        <rect x="9" y="3" width="2" height="2" rx="1" fill="currentColor" />
      </svg>
    );
  },
);

ProfileIcon.displayName = 'ProfileIcon';

export default ProfileIcon;
