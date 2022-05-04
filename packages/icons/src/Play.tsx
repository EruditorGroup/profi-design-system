import React, {forwardRef} from 'react';
import {combineCommonProps} from './_helpers';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const PlayIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        width="1em"
        ref={ref}
        viewBox="0 0 512 512"
        fill="currentColor"
        {...combineCommonProps(props)}
      >
        <path d="M405.2 232.9 126.8 67.2c-3.4-2-6.9-3.2-10.9-3.2-10.9 0-19.8 9-19.8 20H96v344h.1c0 11 8.9 20 19.8 20 4.1 0 7.5-1.4 11.2-3.4l278.1-165.5c6.6-5.5 10.8-13.8 10.8-23.1s-4.2-17.5-10.8-23.1z" />
      </svg>
    );
  },
);

PlayIcon.displayName = 'PlayIcon';

export default PlayIcon;
