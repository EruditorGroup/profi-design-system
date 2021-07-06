import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const YoutubeIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1.44em"
        height="1em"
        viewBox="0 0 36 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.0855 0.764706C33.6275 1.17647 34.8433 2.38235 35.2585 3.91176C36.0295 6.70588 35.9998 12.5294 35.9998 12.5294C35.9998 12.5294 35.9998 18.3235 35.2585 21.1176C34.8433 22.6471 33.6275 23.8529 32.0855 24.2647C29.2684 25 17.9999 25 17.9999 25C17.9999 25 6.76109 25 3.91432 24.2353C2.37231 23.8235 1.1565 22.6176 0.741348 21.0882C0 18.3235 0 12.5 0 12.5C0 12.5 0 6.70588 0.741348 3.91176C1.1565 2.38235 2.40197 1.14706 3.91432 0.735294C6.73144 0 17.9999 0 17.9999 0C17.9999 0 29.2684 0 32.0855 0.764706ZM14.4118 7.14709L23.7824 12.5L14.4118 17.853V7.14709Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

YoutubeIcon.displayName = 'YoutubeIcon';

export default YoutubeIcon;
