import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const HistoryIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2 8C13.2 10.8719 10.8719 13.2 8 13.2C5.12812 13.2 2.8 10.8719 2.8 8C2.8 5.12812 5.12812 2.8 8 2.8C10.8719 2.8 13.2 5.12812 13.2 8ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM7.34951 4.81661C7.34951 4.42086 7.67032 4.10005 8.06607 4.10005C8.46181 4.10005 8.78263 4.42086 8.78263 4.81661V7.80546L10.3891 9.41196C10.669 9.69179 10.669 10.1455 10.3891 10.4253C10.1093 10.7052 9.65558 10.7052 9.37575 10.4253L7.34983 8.39941H7.34951V8.39908L7.34901 8.39859L7.34951 8.39809V4.81661Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

HistoryIcon.displayName = 'HistoryIcon';

export default HistoryIcon;
