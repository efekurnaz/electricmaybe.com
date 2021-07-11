module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["Rosalindale"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"none"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
