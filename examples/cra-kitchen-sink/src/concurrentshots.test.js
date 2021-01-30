import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  concurrentJest: true,
  // the single-file snapshot approach seems to fail with concurrent tests. Use multiple snapshots
  test: multiSnapshotWithOptions(),
});
