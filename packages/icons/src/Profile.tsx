import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const ProfileIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M15.5 5.5C15.5 7.98528 13.4853 10 11 10C8.51473 10 6.50001 7.98528 6.50001 5.5C6.50001 3.01472 8.51473 1 11 1C13.4853 1 15.5 3.01472 15.5 5.5Z"
          fill="currentColor"
        />
        <path
          d="M11 12C7.39145 12 4.22932 13.7202 2.47078 16.2992C0.915087 18.5807 3.23859 21 6.00001 21H16C18.7614 21 21.0849 18.5807 19.5292 16.2992C17.7707 13.7202 14.6086 12 11 12Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

ProfileIcon.displayName = 'ProfileIcon';

export default ProfileIcon;
