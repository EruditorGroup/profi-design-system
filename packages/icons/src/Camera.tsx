import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const CameraIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  ({width = '14', height = '13', color, ...props}, ref) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{color}}
        ref={ref}
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 2C4 0.89543 4.89543 0 6 0H8C9.10457 0 10 0.895431 10 2H12.5C13.3284 2 14 2.67157 14 3.5V11.5C14 12.3284 13.3284 13 12.5 13H1.5C0.671573 13 0 12.3284 0 11.5V3.5C0 2.67157 0.671573 2 1.5 2L4 2ZM7 11C8.933 11 10.5 9.433 10.5 7.5C10.5 5.567 8.933 4 7 4C5.067 4 3.5 5.567 3.5 7.5C3.5 9.433 5.067 11 7 11Z"
          fill="currentColor"
        />
        <path
          d="M7 6V9M5.5 7.5H8.5"
          stroke="currentColor"
          stroke-linecap="round"
        />
      </svg>
    );
  },
);

CameraIcon.displayName = 'CameraIcon';

export default CameraIcon;
