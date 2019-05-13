const path = require("path")
const { createBlogs, createWorks } = require("./src/gatsby/pageCreator")
const gatsbyNodeGraphQL = require("./src/gatsby/gatsbyNodeGraphQL")

const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log('for line 11')
    console.log(result)
    return result
  })

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const workTemplate = path.resolve("./src/templates/work.js")

  const result = await wrapper(
    graphql(`
    {
      ${gatsbyNodeGraphQL}
    }
    `)
  )
  console.log('for line 28')
  console.log(result)
  createBlogs(result.data.blogs.edges, createPage, blogTemplate)
  createWorks(result.data.works.edges, createPage, workTemplate)
}
