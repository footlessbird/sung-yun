const gatsbyNodeGraphQL = `
    blogs: allContentfulBlogPost {
      edges {
        node {
          slug
        }
      }
    }
    
    works: allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }

`
module.exports = gatsbyNodeGraphQL
