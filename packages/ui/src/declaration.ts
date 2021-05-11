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

declare module 'uitype' {
  export type ISize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'huge';

  export type IColor =
    | 'brand'
    | 'primary'
    | 'secondary'
    | 'light'
    | 'danger'
    | 'success'
    | 'warning';
  export type ISocials = 'vk' | 'ya' | 'fb' | 'apple';

  type ForwardingComponentProps<
    As extends React.ElementType,
    P
  > = React.PropsWithChildren<React.ComponentPropsWithRef<As> & P & {as?: As}>;

  export interface ForwardingComponent<
    TInitial extends React.ElementType,
    P = unknown
  > {
    <As extends React.ElementType = TInitial, Context = unknown>(
      props: ForwardingComponentProps<As, P>,
      context?: Context,
    ): React.ReactElement | null;
    defaultProps?: Partial<ForwardingComponentProps<TInitial, P>>;
  }
}
