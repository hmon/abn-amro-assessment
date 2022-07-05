module.exports = {
  transform: {},
  transformIgnorePatterns: ["/node_modules/(?!(swiper)/)"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFilesAfterEnv: ["<rootDir>/tests/unit/setup/jest.setup.ts"]
};
