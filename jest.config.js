export default {
  coverageProvider: 'v8',
  transform: {
    '^.+\\.ts$': ['@swc/jest', {}],
  },
};
