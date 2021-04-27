import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const Close: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  ({width = '20', height = '20', color, ...props}, ref) => {
    return (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        style={{color}}
        ref={ref}
        width={width}
        height={height}
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.58943 1.17519C2.19891 0.784663 1.56574 0.784663 1.17522 1.17519C0.784693 1.56571 0.784693 2.19888 1.17522 2.5894L6.64462 8.05881L1.1753 13.5281C0.784778 13.9187 0.784778 14.5518 1.1753 14.9423C1.56583 15.3329 2.19899 15.3329 2.58952 14.9423L8.05884 9.47302L13.5282 14.9423C13.9187 15.3329 14.5518 15.3329 14.9424 14.9423C15.3329 14.5518 15.3329 13.9187 14.9424 13.5281L9.47305 8.05881L14.9425 2.5894C15.333 2.19888 15.333 1.56571 14.9425 1.17519C14.5519 0.784663 13.9188 0.784663 13.5282 1.17519L8.05884 6.64459L2.58943 1.17519Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Close.displayName = 'Close';

export default Close;
