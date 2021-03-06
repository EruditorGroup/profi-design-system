import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const AppleIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          d="M11.8027 2.6748C12.3184 2.05176 12.6836 1.19238 12.6836 0.333008C12.6836 0.214844 12.6729 0.0966797 12.6514 0C11.8135 0.0322266 10.793 0.558594 10.1914 1.26758C9.70801 1.81543 9.26758 2.6748 9.26758 3.54492C9.26758 3.67383 9.28906 3.80273 9.2998 3.8457C9.35352 3.85645 9.43945 3.86719 9.52539 3.86719C10.2881 3.86719 11.2441 3.3623 11.8027 2.6748ZM12.3936 4.0498C11.126 4.0498 10.0947 4.82324 9.43945 4.82324C8.74121 4.82324 7.81738 4.09277 6.71094 4.09277C4.61621 4.09277 2.5 5.83301 2.5 9.08789C2.5 11.1289 3.28418 13.2666 4.25098 14.6523C5.08887 15.8232 5.81934 16.79 6.86133 16.79C7.90332 16.79 8.35449 16.0918 9.64355 16.0918C10.9541 16.0918 11.2549 16.7686 12.3936 16.7686C13.5322 16.7686 14.2949 15.7266 15.0039 14.6953C15.8096 13.5137 16.1426 12.375 16.1533 12.3105C16.0889 12.2891 13.9082 11.4082 13.9082 8.91602C13.9082 6.75684 15.627 5.80078 15.7236 5.72559C14.5957 4.09277 12.877 4.0498 12.3936 4.0498Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

AppleIcon.displayName = 'AppleIcon';

export default AppleIcon;
