// scss.d.ts
declare module '*.css' {
  const content: {[className: string]: string};
  export default content;
}
declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}

declare module 'react-transition-group';
declare module 'body-scroll-lock';
declare module '*.png';
declare module '@eruditorgroup/profi-icons';

declare module 'uitype' {
  export type ISize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'huge';

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

  type ReplaceProps<Component extends React.ElementType, P> = Pick<
    React.ComponentPropsWithRef<Component>,
    Exclude<keyof React.ComponentPropsWithRef<Component>, keyof P>
  > &
    P;

  export interface AliasProps<
    Component extends React.ElementType = React.ElementType
  > {
    as?: Component;
  }

  export interface ForwardingComponent<
    InitialComponent extends React.ElementType,
    P = unknown
  > {
    <Component extends React.ElementType = InitialComponent, Context = unknown>(
      props: React.PropsWithChildren<
        ReplaceProps<Component, P> & AliasProps<Component>
      >,
      context?: Context,
    ): React.ReactElement | null;
    defaultProps?: Partial<P>;
  }
}
