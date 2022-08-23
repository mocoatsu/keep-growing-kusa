const config = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/tests/**/*.test.ts?(x)"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
};

export default config;
