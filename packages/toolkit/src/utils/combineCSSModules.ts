import canUseDom from './canUseDom';

// @var styles [{class1:'x', class2: 'y'}, {class3: 'z'}]
// @return "
// .class1,
// .class2,
// .class3
// "
const prettySelectors = styles =>
  styles
    .reduce((res, style) => res.concat(Object.keys(style)), [])
    .sort()
    .map(className => `\n\t.${className}`)
    .join('');

export default function combineCSSModules(...styles: Array<{[className: string]: string}>) {
  return function getStyle(selector: string): string {
    for (const style of styles) {
      const className = style[selector];
      if (className) return className;
    }
    if (canUseDom() && process.env.NODE_ENV === 'development') {
      /* eslint-disable-next-line no-console */
      console.error(
        new Error(
          `Missing selector: .${selector} \nAvailable selectors: ${prettySelectors(
            styles,
          )}`,
        ),
        'CSS_MODULES_MISSING_STYLE_NAME',
      );
    }
    return 'undefined';
  };
}
