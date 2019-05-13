const createBlogs = (list, createPage, template) => {
  list.array.forEach(edge => {
    createPage({
      component: template,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

const createWorks = (list, createPage, template) => {

  list.array.forEach(edge => {
    createPage({
      component: template,
      path: `/work/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

module.exports = { createBlogs, createWorks }
