import {IconPropsType} from './_types';
import {theme} from '@eruditorgroup/profi-toolkit';

export const combineCommonProps = (props: IconPropsType): IconPropsType => {
  return {
    ...props,
    className: props.color
      ? `${props.className ?? ''} ${theme.common[`color-${props.color}`] ?? ''}`
      : props.className,
  };
};
