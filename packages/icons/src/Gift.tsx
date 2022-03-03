import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const GiftIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...combineCommonProps(props)}
           ref={ref}>
        <path d="M7.9998 5.05554H12.1109C12.6632 5.05554 13.1109 5.50326 13.1109 6.05554V9.27778M7.9998 5.05554H3.88867C3.33639 5.05554 2.88867 5.50326 2.88867 6.05554V9.27778M7.9998 5.05554V13.5M7.9998 13.5H3.88867C3.33639 13.5 2.88867 13.0523 2.88867 12.5V9.27778M7.9998 13.5H12.1109C12.6632 13.5 13.1109 13.0523 13.1109 12.5V9.27778M2.88867 9.27778H13.1109" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6667 5.05557C11.6485 5.05557 12.4445 4.25963 12.4445 3.27778C12.4445 2.29594 11.6485 1.5 10.6667 1.5C9.68483 1.5 8 2.29594 8 3.27778V5.05557" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.33333 5.05557C4.35148 5.05557 3.55554 4.25963 3.55554 3.27778C3.55554 2.29594 4.35148 1.5 5.33333 1.5C6.31517 1.5 8 2.29594 8 3.27778V5.05557" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    );
  },
);

GiftIcon.displayName = 'GiftIcon';

export default GiftIcon;
