import React, {forwardRef} from 'react';

import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const LocationIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          d="M2.24331 7.49215L14.4825 1.85571C15.1575 1.54487 15.8546 2.24203 15.5438 2.917L9.90735 15.1562C9.45863 16.1306 7.99904 15.8106 7.99904 14.7379L7.99902 9.40048L2.6616 9.40046C1.58888 9.40045 1.26894 7.94087 2.24331 7.49215Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

LocationIcon.displayName = 'LocationIcon';

export default LocationIcon;
