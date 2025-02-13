import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const ResizeIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
           {...combineCommonProps(props)}
           ref={ref}>
        <g clipPath="url(#clip0_4987_30641)">
          <path d="M10.8619 2.33828L15.6615 2.33828L15.6615 7.13789" stroke="#808080" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.33907 10.8582L2.33907 15.6613L7.14221 15.6613" stroke="#808080" strokeWidth="1.7"
                strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.6602 2.33887L10.197 7.80204" stroke="#808080" strokeWidth="1.7" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M2.33984 15.6616L7.80302 10.1984" stroke="#808080" strokeWidth="1.7" strokeLinecap="round"
                strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_4987_30641">
            <rect width="17" height="17" fill="white" transform="translate(0.5 0.5)"/>
          </clipPath>
        </defs>
      </svg>
    );
  },
);

ResizeIcon.displayName = 'ResizeIcon';

export default ResizeIcon;
