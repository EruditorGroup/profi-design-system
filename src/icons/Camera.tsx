import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const CameraIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          d="M7 5a2 2 0 012-2h2a2 2 0 012 2h2.5A1.5 1.5 0 0117 6.5v8a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 14.5v-8A1.5 1.5 0 014.5 5H7zm3 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
          fill="currentColor"
        />
        <path
          d="M10 9v3m-1.5-1.5h3"
          stroke="currentColor"
          stroke-linecap="round"
        />
      </svg>
    );
  },
);

CameraIcon.displayName = 'CameraIcon';

export default CameraIcon;
