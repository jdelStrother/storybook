const { transform } = require('@babel/core');

module.exports = {
  process(src, filename) {
    const hackedSrc = `
${src}
if (!require.main) {
  require('${__dirname}/testCsf').testCsf(module.exports);
}`;

    const result = transform(hackedSrc, {
      filename,
    });

    return result ? result.code : src;
  },
};
