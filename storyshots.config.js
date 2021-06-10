module.exports = {
  moduleNameMapper: {
    '.+\\.(css|scss|svg|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/scripts/jest/setupTests.js'],
  testMatch: ['**/storyshots.test.(j|t)s'],
};
