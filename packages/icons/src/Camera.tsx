import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const CameraIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M8.29158 2.53804C8.52505 1.86637 9.47495 1.86637 9.70842 2.53804L10.8271 5.75638C10.9301 6.05268 11.2066 6.25358 11.5203 6.25998L14.9268 6.3294C15.6377 6.34388 15.9313 7.24729 15.3646 7.67689L12.6495 9.73536C12.3995 9.92487 12.2939 10.2499 12.3847 10.5502L13.3714 13.8114C13.5773 14.4921 12.8088 15.0504 12.2251 14.6442L9.42838 12.6981C9.1709 12.5189 8.8291 12.5189 8.57162 12.6981L5.77488 14.6442C5.1912 15.0504 4.42272 14.4921 4.62863 13.8114L5.61528 10.5502C5.70612 10.2499 5.6005 9.92487 5.35052 9.73536L2.6354 7.67689C2.06875 7.24729 2.36228 6.34388 3.07323 6.3294L6.47974 6.25998C6.79337 6.25358 7.06989 6.05268 7.17288 5.75638L8.29158 2.53804Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

CameraIcon.displayName = 'CameraIcon';

export default CameraIcon;
