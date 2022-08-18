const config = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/tests/**/*.test.ts?(x)"],
  testEnvironment: "jest-environment-jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
};

export default config;
