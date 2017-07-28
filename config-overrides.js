function babelLoader (rule) {
  return rule.loader && rule.loader.endsWith("/babel-loader/lib/index.js");
}

module.exports = function override (config, env) {
  const babelrc = config.module.rules.find(babelLoader).options;

  // Register styled-jsx babel plugin
  babelrc.plugins = ['styled-jsx/babel'].concat(babelrc.plugins || [])

  return config
}
