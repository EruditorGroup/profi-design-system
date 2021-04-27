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
