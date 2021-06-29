import React, {useCallback, forwardRef, HTMLAttributes} from 'react';
import {useTooltipContext} from '../../index';

import {ForwardingComponent, AliasProps} from '@eruditorgroup/profi-toolkit';

const TooltipToggler: ForwardingComponent<
  'div',
  HTMLAttributes<HTMLDivElement> & AliasProps
> = forwardRef(
  (
    {
      className,
      onMouseEnter,
      onMouseLeave,
      onClick,
      as: Component = 'div',
      ...props
    },
    ref,
  ) => {
    const {opened, persist, setOpened, trigger} = useTooltipContext();

    // Proxy handler for click logic
    const onClickHandler = useCallback(
      (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (trigger === 'click') setOpened(!opened);
        if (onClick) onClick(ev);
      },
      [opened, setOpened, onClick, trigger],
    );

    // Proxy handler for hover logic
    const mouseEvents = {
      onMouseEnter: useCallback(
        (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (!persist && trigger === 'hover') setOpened(true);
          if (onMouseEnter) onMouseEnter(ev);
        },
        [persist, trigger, onMouseEnter, setOpened],
      ),
      onMouseLeave: useCallback(
        (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (!persist && trigger === 'hover') setOpened(false);
          if (onMouseLeave) onMouseLeave(ev);
        },
        [persist, trigger, onMouseLeave, setOpened],
      ),
    };

    return (
      <Component
        className={className}
        onClick={onClickHandler}
        {...mouseEvents}
        {...props}
        ref={ref}
      />
    );
  },
);

export default TooltipToggler;
