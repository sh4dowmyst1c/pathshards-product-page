const path = require('path');

module.exports = {
  paths: (paths, env) => {
    paths.appSrc = path.resolve(__dirname, 'src');
    paths.appPublic = path.resolve(__dirname, 'public');
    paths.appBuild = path.resolve(__dirname, 'build');
    paths.appIndexJs = path.resolve(__dirname, 'src/index.js');
    paths.appHtml = path.resolve(__dirname, 'public/index.html');
    return paths;
  },
};
