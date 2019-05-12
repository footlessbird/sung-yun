import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h2 className={blogStyles.title}>
        {props.data.markdownRemark.frontmatter.title}
      </h2>
      <p>
        <small className={blogStyles.date}>
          {props.data.markdownRemark.frontmatter.date}
        </small>
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Blog
