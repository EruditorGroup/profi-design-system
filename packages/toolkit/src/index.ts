import React from 'react';

import * as gestures from '@use-gesture/react';

export * from './constants';
export * from './hooks';
export * from './utils';
export {gestures};
import common from './styles/common.module.scss';
import variables from './styles/variables.css';

import fadeTransition from './styles/FadeIn.module.css';
import slideTransition from './styles/SlideUp.module.css';
import skeletonTransition from './styles/Skeleton.module.css';

export const theme = {
  common,
  variables,
  transitions: {
    slide: slideTransition,
    fade: fadeTransition,
    skeleton: skeletonTransition['skeleton'],
  },
};

export type ISize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export type IColor =
  | 'brand'
  | 'primary'
  | 'secondary'
  | 'light'
  | 'transparent'
  | 'danger'
  | 'success'
  | 'warning';

export type ISocials = 'vk' | 'ya' | 'fb' | 'apple';

export type ReplaceProps<Component extends React.ElementType, P> = Pick<
  React.ComponentPropsWithRef<Component>,
  Exclude<keyof React.ComponentPropsWithRef<Component>, keyof P>
> &
  P;

export interface AliasProps<
  Component extends React.ElementType = React.ElementType
> {
  as?: Component;
}

export type ForwardingCertainComponent<
  CertainComponent extends React.ElementType,
  InitialComponent extends CertainComponent,
  P = unknown
> = {
  <Component extends CertainComponent = InitialComponent, Context = unknown>(
    props: React.PropsWithChildren<
      ReplaceProps<Component, P> & AliasProps<Component>
    >,
    context?: Context,
  ): React.ReactNode | null;
  defaultProps?: Partial<P>;
  displayName?: string;
};

export type ForwardingComponent<
  InitialComponent extends React.ElementType,
  P = unknown
> = ForwardingCertainComponent<React.ElementType, InitialComponent, P>;
