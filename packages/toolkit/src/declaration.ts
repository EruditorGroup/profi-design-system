declare module '*.png';
declare module '*.css' {
  const cssContent: {[className: string]: string};
  export default cssContent;
}
declare module '*.scss' {
  const scssContent: {[className: string]: string};
  export default scssContent;
}
