var preset = require("jest-preset-angular/jest-preset");
module.exports = {
  ...preset,
  preset: "jest-preset-angular",
  testMatch: ["**/*.spec.ts"],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {
    ...preset.globals,
    "ts-jest": {
      ...preset.globals["ts-jest"],
      tsconfig: "./tsconfig.spec.json",
      isolatedModules: true,
    },
  },
  "transformIgnorePatterns": [

  ]
};
