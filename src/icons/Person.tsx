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
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.5 5A1.5 1.5 0 005 6.5v8A1.5 1.5 0 006.5 16h8a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0014.5 5H14v2H7V5h-.5z"
          fill="currentColor"
        />
        <path
          d="M8 5.5A1.5 1.5 0 019.5 4h2A1.5 1.5 0 0113 5.5V6H8v-.5z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

PersonIcon.displayName = 'PersonIcon';

export default PersonIcon;
