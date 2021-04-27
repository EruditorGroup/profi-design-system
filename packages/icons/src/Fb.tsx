import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const FbIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  ({width = '14', height = '14', color, ...props}, ref) => {
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
          d="M7 0C10.866 0 14 3.134 14 7C14 10.4938 11.4402 13.3898 8.09375 13.915V9.02344H9.7248L10.0352 7L10.0351 7L8.09375 7V5.68695C8.09375 5.13338 8.365 4.59375 9.23453 4.59375H10.1172V2.87109C10.1172 2.87109 10.0671 2.86255 9.98006 2.84973C9.71887 2.81128 9.12468 2.73438 8.55025 2.73438C8.55025 2.73438 8.55024 2.73437 8.55023 2.73437C6.9513 2.73437 5.90622 3.70344 5.90622 5.45781V7H4.12888V9.02343L4.12891 9.02344L5.90622 9.02343V13.915C2.55977 13.3898 0 10.4938 0 7C0 3.134 3.134 0 7 0Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

FbIcon.displayName = 'FbIcon';

export default FbIcon;
