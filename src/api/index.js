const files = require.context("./modules", false, /\.js$/);
const modules = {};
files.keys().forEach(key => {
  const name = require("path").basename(key, ".js");
  modules[name] = files(key).default || files(key);
});
export default modules;
