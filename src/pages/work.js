import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import workStyles from "./work.module.scss"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWork {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Work" />
      <h2 className={workStyles.warning}>Warning</h2>
      <div className={workStyles.description}>
        <p>
          <small>
            This contains way more datailed information about my portfolios like
            behind the scene.
          </small>
        </p>
        <p>
          <small>If you want less detail, please check out my git repositories.</small>
        </p>
        <p>
          <small>Or you might want just simply explore then, click the very first url link from each page below.</small>
        </p>

      </div>

      <ol className={workStyles.posts}>
        {data.allContentfulWork.edges.map((edge, key) => {
          return (
            <li key={key} className={workStyles.post}>
              <Link to={`/work/${edge.node.slug}`}>
                <h3>{edge.node.name}</h3>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Work
