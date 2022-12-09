// import initStoryshots from '@storybook/addon-storyshots';
// import { imageSnapshot, Context } from '@storybook/addon-storyshots-puppeteer';
// import path from 'path';
// import { Browser, BrowserType, chromium, webkit, firefox, devices } from 'playwright';
// import { Page } from 'puppeteer';

// const initBrowserStoryshots = (key: string, deviceName: string, browserType: BrowserType) => {
//     let browser: Browser;
//     afterAll(() => {
//         return browser.close();
//     });

//     const getCustomBrowser = async () => {
//         browser = await browserType.launch();
//         const context = await browser.newContext(devices[deviceName]);
//         return context;
//     };

//     const getMatchOptions = (options: { context: Context }) => {
//         const { kind, story } = options.context;

//         const dir = path.resolve(__dirname, '__image_snapshots__', key, kind);
//         const name = story.replaceAll(/\s/g, '');

//         return {
//             customSnapshotsDir: path.resolve(dir),
//             customSnapshotIdentifier: name,
//             failureThreshold: 0.0001,
//         };
//     };

//     const getScreenshotOptions = () => {
//         return {
//             encoding: 'base64',
//             fullPage: false,
//         };
//     };

//     const beforeScreenshot = (page: Page) => page.$('#root > *');

//     initStoryshots({
//         framework: 'react',
//         suite: 'storyshots',
//         storyNameRegex: /^((?!.*?DontTest).)*$/,
//         test: imageSnapshot({
//             storybookUrl: `file://${path.resolve(__dirname, '../../../.storybook/dist')}`,
//             getScreenshotOptions, //@ts-ignore
//             getCustomBrowser,
//             getMatchOptions, //@ts-ignore
//             beforeScreenshot,
//         }),
//     });
// };

// initBrowserStoryshots('Desktop-firefox', 'Desktop Firefox', firefox);
// initBrowserStoryshots('Desktop-chrome', 'Desktop Chrome', chromium);
// initBrowserStoryshots('Desktop-safari', 'Desktop Safari', webkit);
// initBrowserStoryshots('Pixel5-chrome', 'Pixel 5', chromium);
// initBrowserStoryshots('iPhone13-safari', 'iPhone 13', webkit);
