module.exports = {
  name: 'remote-a',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
