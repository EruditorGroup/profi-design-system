import fs from 'fs';
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import {
  imageSnapshot,
  ImageSnapshotConfig,
} from '@storybook/addon-storyshots-puppeteer';
import puppeteer from 'puppeteer';

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

const browsers = [];
const getCustomBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--font-render-hinting=medium',
      '--enable-font-antialiasing',
    ],
  });

  browsers.push(browser);
  return browser;
};

const getMatchOptions: ImageSnapshotConfig['getMatchOptions'] = () => {
  return {
    comparisonMethod: 'ssim',
    failureThreshold: 0.5,
    failureThresholdType: 'percent',
  };
};

const test = imageSnapshot({
  storybookUrl: getStorybookEntryPath(),
  getCustomBrowser,
  beforeScreenshot,
  getMatchOptions,
});

test.afterAll = async () => {
  await Promise.all(browsers.map((browser) => browser.close()));
};

initStoryshots({test});
