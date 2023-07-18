module.exports = {
  name: 'remote-b',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
