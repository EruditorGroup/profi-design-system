// Roboto
import './fonts/roboto/roboto-v27-latin-400.woff2';
import './fonts/roboto/roboto-v27-latin-400.woff';
import './fonts/roboto/roboto-v27-cyryllic-400.woff2';
import './fonts/roboto/roboto-v27-cyryllic-400.woff';
import './fonts/roboto/roboto-v27-latin-500.woff2';
import './fonts/roboto/roboto-v27-latin-500.woff';
import './fonts/roboto/roboto-v27-cyryllic-500.woff2';
import './fonts/roboto/roboto-v27-cyryllic-500.woff';
import './fonts/roboto/roboto-v27-latin-700.woff2';
import './fonts/roboto/roboto-v27-latin-700.woff';
import './fonts/roboto/roboto-v27-cyryllic-700.woff2';
import './fonts/roboto/roboto-v27-cyryllic-700.woff';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'default',
        value: '#fafafa',
      },
    ],
  },
};
