import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from '../components/head'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />

      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, key) => {
          return (
            <li key={key} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>
                  <small>{edge.node.publishedDate}</small>
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