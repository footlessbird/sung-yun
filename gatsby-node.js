const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = new Promise((resolve, err) => {
    graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.map(({ node }) => {
        createPage({
          path: `blog/${node.slug}/`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const workTemplate = new Promise((resolve, err) => {
    graphql(`
      query {
        allContentfulWork {
          edges {
            node {
              name
              slug
              body {
                json
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulWork.edges.map(({ node }) => {
        createPage({
          path: `work/${node.slug}/`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
  return Promise.all([blogTemplate, workTemplate])
}
