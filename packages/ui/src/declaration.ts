declare module 'react-transition-group';
declare module 'body-scroll-lock';
declare module '*.png';
declare module '*.jpg';
declare module '*.css' {
  const cssContent: {[className: string]: string};
  export default cssContent;
}
declare module '*.scss' {
  const scssContent: {[className: string]: string};
  export default scssContent;
}
