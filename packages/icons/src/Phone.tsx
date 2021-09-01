import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const PhoneIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...combineCommonProps(props)}
      >
        <path
          d="M5.96 3.17L4.6 1.23C3.5-.35 2 .99 1.11 1.88-.4 3.39-.23 7.35 4.07 11.68c4.33 4.3 8.28 4.47 9.8 2.95.88-.88 2.22-2.38.65-3.48l-1.95-1.37c-.67-.46-1.59-.3-2.06.37-1.1 1.58-1.32 2.33-2.55 1.1L4.5 7.79C3.27 6.56 4 6.34 5.6 5.23c.67-.47.83-1.39.36-2.06z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

PhoneIcon.displayName = 'PhoneIcon';

export default PhoneIcon;
