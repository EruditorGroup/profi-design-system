import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const DeleteIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
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
          fill="currentColor"
          fillRule="evenodd"
          d="M8.05 0a2 2 0 0 0-2 2v1H2.2a1 1 0 0 0 0 2h.2l.78 9.25A3 3 0 0 0 6.18 17h5.64a3 3 0 0 0 3-2.75L15.58 5h.2a1 1 0 1 0 0-2h-3.84V2a2 2 0 0 0-2-2h-1.9Zm1.9 3V2h-1.9v1h1.9ZM4.42 5h9.16l-.76 9.08a1 1 0 0 1-1 .92H6.18a1 1 0 0 1-1-.92L4.42 5Z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

DeleteIcon.displayName = 'DeleteIcon';

export default DeleteIcon;
