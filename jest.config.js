module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    'quasar': 'quasar-framework/dist/umd/quasar.mat.umd.js'
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/",
  watchPlugins: [
    "/home/dphillips/Documents/RedHat/Workspace/test-nested-components/node_modules/jest-watch-typeahead/filename.js",
    "/home/dphillips/Documents/RedHat/Workspace/test-nested-components/node_modules/jest-watch-typeahead/testname.js"
  ]
};
