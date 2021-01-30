module.exports = {
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(md)$': '<rootDir>/../../__mocks__/htmlMock.js',
    // non-js files
    '\\.(jpg|jpeg|png|apng|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../../__mocks__/fileMock.js',
    '\\.(css|scss|stylesheet)$': '<rootDir>/../../__mocks__/styleMock.js',

    // core-js v2 to v3 mapping
    'core-js/modules/es6.(.*)': 'core-js/modules/es.$1',
    'core-js/modules/es7.(.*)': 'core-js/modules/esnext.$1',
    'core-js/library/fn/(.*)': `core-js/features/$1`,
    'core-js/es5/(.*)': `core-js/es/$1`,
    'core-js/es6/(.*)': `core-js/es/$1`,
    'core-js/es7/reflect': `core-js/proposals/reflect-metadata`,
    'core-js/es7/(.*)': `core-js/proposals/$1`,
    'core-js/object$/': `core-js/es/object`,
    'core-js/object/(.*)': `core-js/es/object/$1`,
    'babel-runtime/core-js/(.*)': `core-js/es/$1`,
    // 'babel-runtime/core-js/object/assign'
    'core-js/library/fn/object/assign': 'core-js/es/object/assign',
  },
  transform: {
    '^.+\\.stories\\.[jt]sx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.[jt]sx?$': '<rootDir>/../../scripts/utils/jest-transform-js.js',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    '^.+\\.svg$': '<rootDir>/../../node_modules/react-scripts/config/jest/fileTransform.js',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  globals: {
    DOCS_MODE: false,
    PREVIEW_URL: undefined,
  },
  snapshotSerializers: ['jest-emotion', 'enzyme-to-json/serializer', 'jest-serializer-html'],
  // setupFilesAfterEnv: ['./scripts/jest.init.ts'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  setupFiles: ['raf/polyfill'],
  testURL: 'http://localhost',
  modulePathIgnorePatterns: ['/dist/.*/__mocks__/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  roots: [__dirname],
  moduleDirectories: ['node_modules', '<rootDir>/../../node_modules/', 'src'],
};
