const defaultSettings = require('./src/setting');
const path = require("path");
function resolve (dir) {
  return path.resolve(__dirname, dir);
}
module.exports = {
  lintOnSave: 'error',
  configureWebpack: {
    name: defaultSettings.title
  },
  chainWebpack (config) {
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  }
};
