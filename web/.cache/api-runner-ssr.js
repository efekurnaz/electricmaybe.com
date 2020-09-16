var plugins = [{
      plugin: require('/Users/batu/Sites/Shopify/electricmaybe/example-company-website-gatsby-sanity-combo/web/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/batu/Sites/Shopify/electricmaybe/example-company-website-gatsby-sanity-combo/web/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"lv3g49d1","dataset":"production","token":"sk9w2kfik1Ida5CP5bErFQt5BSolxGl4a0JiQRbpE7DSheM61Is8qiD9jCH4oOaq4YtT5dcRgA0r1DM3vBAzjFFuzIccmjVkoGSem0xwan3AVkQV56ClrVUVmG5yVrLGZUuKTxYds5vjScY6hyqybNATthVWdvmPZ4yTe0uE0oP7mhNDNoRh","watchMode":true,"overlayDrafts":true},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
