import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from "./_helpers";


const RubleSignIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"   {...combineCommonProps(props)}
           ref={ref}>
        <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" stroke-width="1.5"/>
        <path fill='currentColor' d="M5.82373 10.9469C5.82373 11.3611 6.15952 11.6969 6.57373 11.6969C6.98794 11.6969 7.32373 11.3611 7.32373 10.9469H5.82373ZM6.57373 4.05313V3.30313C6.15952 3.30313 5.82373 3.63892 5.82373 4.05313L6.57373 4.05313ZM6.57373 7.6157H5.82373H6.57373ZM6.57373 4.80313C7.23801 4.80313 8.01299 4.80792 8.61919 4.99179C8.91313 5.08095 9.10354 5.19481 9.21619 5.31517C9.31214 5.41769 9.39153 5.56525 9.39153 5.83441H10.8915C10.8915 5.21066 10.6847 4.68909 10.3114 4.2902C9.95475 3.90915 9.49284 3.6893 9.05458 3.55637C8.19639 3.29606 7.18747 3.30313 6.57373 3.30313V4.80313ZM7.32373 10.9469V7.6157H5.82373V10.9469H7.32373ZM7.32373 7.6157V4.05313L5.82373 4.05313V7.6157H7.32373ZM9.39153 5.83441C9.39153 6.1116 9.3121 6.26121 9.22086 6.36153C9.11459 6.47838 8.93384 6.58999 8.6481 6.67793C8.05487 6.86052 7.28338 6.8657 6.57373 6.8657L6.57373 8.3657C7.22699 8.3657 8.23941 8.37316 9.08935 8.11157C9.52519 7.97742 9.98084 7.75532 10.3306 7.37076C10.6953 6.96966 10.8915 6.45015 10.8915 5.83441H9.39153Z" />
        <path fill='currentColor' d="M5.41016 9.64297H8.50518" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fill='currentColor' d="M5.41016 7.59799H6.34644" stroke="#currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    );
  },
);

RubleSignIcon.displayName = 'RubleSignIcon';

export default RubleSignIcon;
