import { sync } from 'read-pkg-up';

export default {
  packageJson: sync({ cwd: __dirname }).packageJson,
  framework: 'svelte',
  frameworkPresets: [require.resolve('./framework-preset-svelte.js')],
};
