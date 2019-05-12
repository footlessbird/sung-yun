import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2 className={blogStyles.title}>said:</h2>

      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, key) => {
          return (
            <li key={key} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>
                  <small>{edge.node.frontmatter.date}</small>
                </p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
