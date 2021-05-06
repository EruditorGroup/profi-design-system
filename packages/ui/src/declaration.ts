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
}
