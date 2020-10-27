/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PriceTemplatePath = path.resolve(`src/templates/Price.tsx`)

  const result = await graphql(`
    query buildTime {
      site {
        buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      }
    }
  `)

  createPage({
    path: `/`,
    component: PriceTemplatePath,
    context: {
      fuck: "me",
      data: result.data,
    },
  })
}
