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

  export interface ForwardingComponent<
    TInitial extends React.ElementType,
    P = unknown
  > {
    <As extends React.ElementType = TInitial, Context = unknown>(
      props: React.ComponentPropsWithRef<As> & P & {as?: As},
      context?: Context,
    ): React.ReactElement | null;
    defaultProps?: Partial<
      React.ComponentPropsWithRef<TInitial> & P & {as?: TInitial}
    >;
  }
}
