import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const ChatFilledIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...combineCommonProps(props)}
      ref={ref}
    >
      <path
        d="M17.39 17.3c-.19.03-.4.04-.6.05v2.66a.81.81 0 0 1-1.35.6l-3.52-3.22H5.45a3.95 3.95 0 0 1-3.95-3.96V7.45A3.95 3.95 0 0 1 5.45 3.5h11.1a3.95 3.95 0 0 1 3.95 3.95v5.98a3.96 3.96 0 0 1-3.08 3.86h-.03Z"
        fill="currentColor"
      />
    </svg>
  )
);

ChatFilledIcon.displayName = "ChatFilledIcon";

export default ChatFilledIcon;
