const context = require.context("./", true, /\.vue$/);
const obj = {};
context.keys().forEach(function(key) {
  const moduleName = key.substring(
    key.lastIndexOf("/") + 1,
    key.lastIndexOf(".vue")
  );
  obj[moduleName] = context(key).default;
});
export const modules = obj;
