import React, {createContext, forwardRef, useContext, useMemo} from 'react';
import classNames from 'classnames';
import TooltipContent from './components/TooltipContent';
import TooltipToggler from './components/TooltipToggler';
import {
  useClickOutside,
  useCombinedRef,
  useControllableState,
} from '@eruditorgroup/profi-toolkit';
import type {ForwardRefExoticComponent, HTMLAttributes} from 'react';

import styles from './Tooltip.module.scss';
import {AliasProps} from '@eruditorgroup/profi-toolkit';
import {Omit} from 'react-autosuggest';

export type ITrigger = 'hover' | 'click' | 'custom';

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    AliasProps {
  trigger?: ITrigger;
  persist?: boolean;
  opened?: boolean;
  onChange?: (state: boolean) => void;
}

interface TooltipComponent
  extends ForwardRefExoticComponent<
    TooltipProps & {ref?: React.Ref<HTMLDivElement>}
  > {
  Content: typeof TooltipContent;
  Toggler: typeof TooltipToggler;
  useTooltipContext: typeof useTooltipContext;
}

export type TooltipContextType = {
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
      opened: openedProp,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [opened, setOpened] = useControllableState({
      value: openedProp,
      defaultValue: false,
      onChange,
    });

    const [combinedRef, setRef] = useCombinedRef<HTMLDivElement | null>(ref);

    const tooltipContext = useMemo<TooltipContextType>(
      () => ({opened, setOpened, trigger, persist}),
      [opened, setOpened, trigger, persist],
    );

    useClickOutside(combinedRef, () => {
      if (trigger === 'click') {
        opened && setOpened(false);
      }
    });

    return (
      <TooltipContext.Provider value={tooltipContext}>
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
          ref={setRef}
        />
      </TooltipContext.Provider>
    );
  },
) as TooltipComponent;

Tooltip.Content = TooltipContent;
Tooltip.Toggler = TooltipToggler;
Tooltip.useTooltipContext = useTooltipContext;

export default Tooltip;
