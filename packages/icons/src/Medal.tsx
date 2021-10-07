import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent} from 'react';
import type {IconPropsType} from './_types';
import {combineCommonProps} from './_helpers';

const MedalIcon: ForwardRefExoticComponent<IconPropsType> = forwardRef(
  (props, ref) => {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...combineCommonProps(props)}
        ref={ref}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.33475 1.04888C7.961 0.730369 7.41128 0.730369 7.03752 1.04888L6.09564 1.85155C5.93548 1.98804 5.73634 2.07052 5.52657 2.08726L4.29299 2.1857C3.80348 2.22477 3.41477 2.61348 3.37571 3.10299L3.27727 4.33657C3.26053 4.54633 3.17804 4.74547 3.04155 4.90564L2.23889 5.84752C1.92037 6.22128 1.92037 6.771 2.23889 7.14475L3.04155 8.08663C3.17804 8.2468 3.26053 8.44594 3.27727 8.6557L3.37571 9.88928C3.41477 10.3788 3.80348 10.7675 4.29299 10.8066L5.52657 10.905C5.73634 10.9217 5.93548 11.0042 6.09564 11.1407L7.03752 11.9434C7.41128 12.2619 7.961 12.2619 8.33475 11.9434L9.27664 11.1407C9.4368 11.0042 9.63594 10.9217 9.84571 10.905L11.0793 10.8066C11.5688 10.7675 11.9575 10.3788 11.9966 9.88928L12.095 8.6557C12.1117 8.44594 12.1942 8.2468 12.3307 8.08663L13.1334 7.14475C13.4519 6.771 13.4519 6.22127 13.1334 5.84752L12.3307 4.90564C12.1942 4.74547 12.1117 4.54633 12.095 4.33657L11.9966 3.10299C11.9575 2.61348 11.5688 2.22477 11.0793 2.1857L9.84571 2.08726C9.63594 2.07052 9.4368 1.98804 9.27664 1.85155L8.33475 1.04888ZM7.69 8.99994C9.07071 8.99994 10.19 7.88065 10.19 6.49994C10.19 5.11923 9.07071 3.99994 7.69 3.99994C6.30929 3.99994 5.19 5.11923 5.19 6.49994C5.19 7.88065 6.30929 8.99994 7.69 8.99994Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3154 10.7583L11.3153 10.7582C11.2403 10.7832 11.1612 10.7995 11.0793 10.806L9.84571 10.9045C9.63595 10.9212 9.43681 11.0037 9.27664 11.1402L8.62971 11.6915L8.62972 11.6915L9.27664 11.1402C9.4368 11.0037 9.63594 10.9213 9.84571 10.9045L11.0793 10.8061C11.1612 10.7995 11.2403 10.7832 11.3154 10.7583ZM6.79704 11.738L6.79706 11.7379L6.09565 11.1402C5.93548 11.0037 5.73634 10.9212 5.52658 10.9045L4.293 10.806C4.23508 10.8014 4.17858 10.7919 4.1239 10.7779L4.12388 10.7779C4.17857 10.7919 4.23507 10.8015 4.29299 10.8061L5.52657 10.9045C5.73634 10.9213 5.93548 11.0037 6.09564 11.1402L6.79704 11.738ZM3.69756 11.6922C3.86067 11.7506 4.03365 11.7886 4.21344 11.8029L5.44702 11.9013L6.3586 12.6782L5.31056 14.9257L4.62652 13.0464L2.74713 13.7304L3.69756 11.6922ZM9.06816 12.6318L9.92525 11.9013L11.1588 11.8029C11.3626 11.7866 11.5576 11.7401 11.7394 11.6677L12.7013 13.7304L10.8219 13.0464L10.1379 14.9257L9.06816 12.6318Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

MedalIcon.displayName = 'MedalIcon';
export default MedalIcon;
