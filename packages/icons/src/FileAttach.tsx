import React, {forwardRef, ForwardRefExoticComponent} from 'react';

import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const FileAttachIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 26 33"
        fill="none"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          d="M0.5 5.5C0.5 3.01472 2.51472 1 5 1H17.7929L25.5 8.70711V27.5C25.5 29.9853 23.4853 32 21 32H5C2.51472 32 0.5 29.9853 0.5 27.5V5.5Z"
          fill="currentColor"
          stroke="#fff"
        />
        <path
          d="M17.9497 15.5858C16.7823 14.4184 15.3381 12.9742 14.0599 11.696C12.3026 9.93865 9.45399 9.93932 7.69663 11.6967V11.6967C5.93927 13.454 5.93927 16.3033 7.69663 18.0606L11.5857 21.9497"
          stroke="#fff"
        />
        <path
          d="M17.2426 14.8787L19.364 17C20.5355 18.1716 20.5355 20.0711 19.364 21.2427V21.2427C18.1924 22.4142 16.2929 22.4142 15.1213 21.2427L13 19.1213"
          stroke="#fff"
        />
        <path
          d="M16.535 18.4142C14.8627 16.7419 13.0491 14.9283 11.938 13.8172C11.3522 13.2314 10.4033 13.2322 9.8175 13.818V13.818C9.23171 14.4038 9.23171 15.3535 9.8175 15.9393L14.4137 20.5355"
          stroke="#fff"
        />
      </svg>
    );
  },
);

FileAttachIcon.displayName = 'FileAttachIcon';
export default FileAttachIcon;
