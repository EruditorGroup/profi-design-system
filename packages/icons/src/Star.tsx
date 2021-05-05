import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const StarIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 15 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M6.79158 2.53804C7.02505 1.86637 7.97495 1.86637 8.20842 2.53804L9.32712 5.75638C9.43011 6.05268 9.70663 6.25358 10.0203 6.25998L13.4268 6.3294C14.1377 6.34388 14.4313 7.24729 13.8646 7.67689L11.1495 9.73536C10.8995 9.92487 10.7939 10.2499 10.8847 10.5502L11.8714 13.8114C12.0773 14.4921 11.3088 15.0504 10.7251 14.6442L7.92838 12.6981C7.6709 12.5189 7.3291 12.5189 7.07162 12.6981L4.27488 14.6442C3.6912 15.0504 2.92272 14.4921 3.12863 13.8114L4.11528 10.5502C4.20612 10.2499 4.1005 9.92487 3.85052 9.73536L1.1354 7.67689C0.568747 7.24729 0.862283 6.34388 1.57323 6.3294L4.97974 6.25998C5.29337 6.25358 5.56989 6.05268 5.67288 5.75638L6.79158 2.53804Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

StarIcon.displayName = 'StarIcon';

export default StarIcon;
