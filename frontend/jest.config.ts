const config = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/tests/**/*.test.ts?(x)"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
};

export default config;
