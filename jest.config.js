module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
    roots: ['<rootDir>/src'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'json',  'text'],
    reporters: ['default']
};