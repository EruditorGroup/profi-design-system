import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';

const FbIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  ({width = '20', height = '20', color, ...props}, ref) => {
    return (
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        style={{color}}
        ref={ref}
        width={width}
        height={height}
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.5 6a5.5 5.5 0 01.86 10.933V13.09h1.28l.245-1.59H9.359v-1.032c0-.435.213-.859.897-.859h.693V8.256s-.63-.108-1.23-.108c-1.257 0-2.078.762-2.078 2.14V11.5H6.244v1.59h1.397v3.843A5.501 5.501 0 018.5 6z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.086 5.463a6.5 6.5 0 018.451 8.451c.762-.092 1.29-.285 1.691-.686C17 12.456 17 11.214 17 8.73v-.458c0-2.485 0-3.727-.772-4.5C15.456 3 14.214 3 11.73 3h-.458c-2.485 0-3.727 0-4.5.772-.4.4-.593.928-.685 1.691z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

FbIcon.displayName = 'FbIcon';

export default FbIcon;
