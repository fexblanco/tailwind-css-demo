const { merge } = require('webpack-merge');

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    return merge(config, {
      module: {
        rules: [
          {
            test: /\.hbs$/,
            use: 'handlebars-loader'
        },
        ]
      }
    });
  },
}