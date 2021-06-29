declare module '*.css' {
  const _cssContent: {[className: string]: string};
  export default _cssContent;
}
declare module '*.scss' {
  const _scssContent: {[className: string]: string};
  export default _scssContent;
}
