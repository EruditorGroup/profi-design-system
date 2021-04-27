import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const UploadIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          d="M10 17a7 7 0 100-14 7 7 0 000 14zm0-11l-4 4h2.5v3.5h3V10H14l-4-4z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

UploadIcon.displayName = 'UploadIcon';

export default UploadIcon;
