module.exports = {
  // tell Jest to handle `*.vue` files
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    // process js with `babel-jest`
    '^.+\\.js$': 'babel-jest',
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/*.vue',
  ],
}
