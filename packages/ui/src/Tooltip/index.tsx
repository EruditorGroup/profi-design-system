import React, {createContext, forwardRef, useContext, useState} from 'react';
import classNames from 'classnames';
import TooltipContent from './components/TooltipContent';
import TooltipToggler from './components/TooltipToggler';

import type {ForwardRefExoticComponent, HTMLAttributes} from 'react';

import styles from './Tooltip.module.scss';
import {AliasProps} from 'uitype';

export type ITrigger = 'hover' | 'click';

export interface TooltipProps
  extends HTMLAttributes<HTMLDivElement>,
    AliasProps {
  trigger?: ITrigger;
  persist?: boolean;
}

interface TooltipComponent extends ForwardRefExoticComponent<TooltipProps> {
  Content: typeof TooltipContent;
  Toggler: typeof TooltipToggler;
}

type TooltipContextType = {
  trigger: ITrigger;
  persist: boolean; // should we not close tooltip when mouse is over tooltip content ?
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const TooltipContext = createContext<TooltipContextType | null>(null);

export const useTooltipContext = (): TooltipContextType => {
  const context = useContext(TooltipContext);
  if (!context) throw new Error('Context "TooltipContext" not found');
  return context;
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      className,
      trigger = 'hover',
      persist = false,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const [opened, setOpened] = useState(false);

    return (
      <TooltipContext.Provider value={{opened, setOpened, trigger, persist}}>
        <div
          className={classNames(styles['tooltip'], className)}
          onMouseEnter={(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (persist && trigger === 'hover') setOpened(true);
            if (onMouseEnter) onMouseEnter(ev);
          }}
          onMouseLeave={(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (persist && trigger === 'hover') setOpened(false);
            if (onMouseLeave) onMouseLeave(ev);
          }}
          {...props}
          ref={ref}
        />
      </TooltipContext.Provider>
    );
  },
) as TooltipComponent;

Tooltip.Content = TooltipContent;
Tooltip.Toggler = TooltipToggler;

export default Tooltip;
