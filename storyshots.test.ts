import fs from 'fs';
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import {
  imageSnapshot,
  ImageSnapshotConfig,
} from '@storybook/addon-storyshots-puppeteer';

const getStorybookEntryPath = (): string => {
  const ROOT_DIR = path.resolve(__dirname);
  const STORYBOOK_PATH = path.join(ROOT_DIR, 'storybook-static');
  if (!fs.existsSync(STORYBOOK_PATH)) {
    throw 'No storybook entry found! Please run `yarn build-storybook` first!';
  }
  return `file://${STORYBOOK_PATH}`;
};

const beforeScreenshot: ImageSnapshotConfig['beforeScreenshot'] = async (
  page,
  {context: {parameters}},
) => {
  const viewport = parameters.viewport;

  if (viewport?.defaultViewport) {
    const defaultViewport = viewport.viewports[viewport.defaultViewport];
    const height =
      defaultViewport.styles.height === '100%'
        ? 320 // will grow to fit content
        : parseInt(defaultViewport.styles.height, 10);
    await page.setViewport({
      width: parseInt(defaultViewport.styles.width, 10),
      height: height,
    });
  }
};

initStoryshots({
  storyKindRegex: /^((?!.*?Text \& Title).)*$/,
  test: imageSnapshot({
    storybookUrl: getStorybookEntryPath(),
    beforeScreenshot,
    getMatchOptions: () => ({
      allowSizeMismatch: true,
      failureThreshold: 0.03,
      failureThresholdType: 'percent',
    }),
  }),
});
