import path from "path";

const config = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  babel: {
    presets: [
      [
        "@babel/preset-react",
        { runtime: "automatic", importSource: "@emotion/react" },
      ],
    ],
    plugins: ["@emotion/babel-plugin"],
  },
};

export default config;
