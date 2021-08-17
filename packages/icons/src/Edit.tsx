import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const EditIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M11.0607 5.06066C11.6464 4.47487 11.6464 3.52513 11.0607 2.93934C10.4749 2.35355 9.52513 2.35355 8.93934 2.93934L11.0607 5.06066ZM8.93934 2.93934L4.43934 7.43934L6.56066 9.56066L11.0607 5.06066L8.93934 2.93934Z"
          fill="currentColor"
        />
        <path
          d="M3 11V9.70711C3 9.25435 3.17986 8.82014 3.5 8.5L5.5 10.5C5.17986 10.8201 4.74565 11 4.29289 11H3Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

EditIcon.displayName = 'EditIcon';

export default EditIcon;
