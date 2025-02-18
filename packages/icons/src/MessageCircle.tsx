import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const MessageCircleIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        fill="none"
        width="1em"
        height="1em"
        viewBox="0 0 12 11"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          d="M10.5 5.25001C10.5017 5.90995 10.3475 6.56096 10.05 7.15001C9.69722 7.85589 9.15488 8.4496 8.48372 8.86465C7.81257 9.27971 7.03912 9.49971 6.25 9.50001C5.59007 9.50173 4.93906 9.34755 4.35 9.05001L1.5 10L2.45 7.15001C2.15247 6.56096 1.99828 5.90995 2 5.25001C2.00031 4.46089 2.22031 3.68744 2.63536 3.01629C3.05041 2.34514 3.64413 1.8028 4.35 1.45001C4.93906 1.15248 5.59007 0.998294 6.25 1.00001H6.5C7.54217 1.05751 8.52652 1.49739 9.26457 2.23544C10.0026 2.97349 10.4425 3.95784 10.5 5.00001V5.25001Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

MessageCircleIcon.displayName = 'MessageCircleIcon';

export default MessageCircleIcon;
