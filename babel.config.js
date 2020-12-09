module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "assets": "/assets",
            "navigation":"./src/navigation",
            "components": "./src/components",
            "constants": "./src/constants",
            "data": "./src/data",
            "hooks": "./src/hooks",
            "store": "./src/store",
            "screens": "./src/screens",
            "services": "./src/services",
            "types": "./src/types",
            "utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
