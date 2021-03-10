import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const ArrowLeft: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  ({width = '20', height = '20', color, ...props}, ref) => {
    return (
      <svg
        viewBox="0 0 11 18"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width}
        height={height}
        {...props}
      >
        <path
          fill={color}
          d="M1.1,7.5l7-7c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1l-6,6l6,6c0.6,0.6,0.6,1.5,0,2.1c-0.6,0.6-1.5,0.6-2.1,0l-7-7
	L0,8.5L1.1,7.5z"
        />
      </svg>
    );
  },
);

ArrowLeft.displayName = 'ArrowLeft';

export default ArrowLeft;
