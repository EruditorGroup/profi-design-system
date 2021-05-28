import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const MenuIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 17H20V15H2V17ZM2 12H20V10H2V12ZM2 5V7H20V5H2Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

MenuIcon.displayName = 'MenuIcon';

export default MenuIcon;
