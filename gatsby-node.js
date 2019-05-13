const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = new Promise((res, err) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      console.log('line 18')
      console.log(result)
      result.data.allContentfulBlogPost.edges.map(({ node }) => {
        createPage({
          component: path.resolve("./src/templates/blog.js"),
          path: `/blog/${node.slug}`,
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const workTemplate = new Promise((res, err) => {
    graphql(`
      {
        allContentfulBlogWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      console.log('line 45')
      console.log(result)
      result.data.allContentfulBlogWork.edges.map(({ node }) => {
        createPage({
          component: path.resolve("./src/templates/work.js"),
          path: `/work/${node.slug}`,
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
