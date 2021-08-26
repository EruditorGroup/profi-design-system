import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const GalleryIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 1C1.39543 1 0.5 1.89543 0.5 3V11C0.5 12.0371 1.28934 12.8898 2.3 12.9901V6C2.3 4.23269 3.73269 2.8 5.5 2.8H14.4901C14.3898 1.78934 13.5371 1 12.5 1H2.5ZM5.5 4C4.39543 4 3.5 4.89543 3.5 6V13V14C3.5 15.1046 4.39543 16 5.5 16H15.5C16.6046 16 17.5 15.1046 17.5 14V6C17.5 4.89543 16.6046 4 15.5 4H14.5H5.5ZM10.5 10.1249C11.5562 10.1249 12.4124 9.26863 12.4124 8.21243C12.4124 7.15623 11.5562 6.3 10.5 6.3C9.44375 6.3 8.58753 7.15623 8.58753 8.21243C8.58753 9.26863 9.44375 10.1249 10.5 10.1249ZM6.87517 12.8019C7.62252 11.7059 8.96638 10.9748 10.5 10.9748C12.0335 10.9748 13.3774 11.7059 14.1247 12.8019C14.7859 13.7715 13.7984 14.7997 12.6249 14.7997H8.37504C7.20148 14.7997 6.21403 13.7715 6.87517 12.8019Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

GalleryIcon.displayName = 'GalleryIcon';

export default GalleryIcon;
