export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  };
  