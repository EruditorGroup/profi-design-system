import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const SupportIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.94322 6.96281C3.25 8.4023 3.25 10.2682 3.25 14C3.25 17.7318 3.25 19.5977 3.94322 21.0372C4.63127 22.4659 5.78406 23.6187 7.21281 24.3068C8.6523 25 10.5182 25 14.25 25C17.9818 25 19.8477 25 21.2872 24.3068C22.7159 23.6187 23.8687 22.4659 24.5568 21.0372C25.25 19.5977 25.25 17.7318 25.25 14C25.25 10.2682 25.25 8.4023 24.5568 6.96281C23.8687 5.53406 22.7159 4.38127 21.2872 3.69322C19.8477 3 17.9818 3 14.25 3C10.5182 3 8.6523 3 7.21281 3.69322C5.78406 4.38127 4.63127 5.53406 3.94322 6.96281ZM15.019 15.6602H12.7339L12.7119 15.3672C12.5728 14.1147 12.939 13.4556 13.957 12.8696C14.9531 12.2837 15.2095 11.9761 15.2095 11.3389V11.3242C15.2095 10.7383 14.7261 10.3281 14.0376 10.3281C13.3345 10.3281 12.8511 10.7969 12.8364 11.5L12.8218 11.5073L10.4487 11.5146L10.4561 11.5C10.4707 9.58838 11.8623 8.33594 14.2061 8.33594C16.4326 8.33594 17.8828 9.50781 17.8828 11.2583V11.2729C17.8828 12.3496 17.3774 13.0967 16.3008 13.7192C15.2974 14.2979 15.019 14.6274 15.019 15.3159V15.6602ZM15.4365 17.9233C15.4365 18.7656 14.8872 19.2563 13.9424 19.2563C12.9976 19.2563 12.4409 18.7656 12.4409 17.9233C12.4409 17.0737 12.9976 16.583 13.9424 16.583C14.8872 16.583 15.4365 17.0737 15.4365 17.9233Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

SupportIcon.displayName = 'SupportIcon';

export default SupportIcon;