import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      name
      body {
        json
      }
    }
  }
`

const Work = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.name["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  console.log(props.data)
  return (
    <Layout>
      <Head title={props.data.contentfulWork.name} />
      <h1>{props.data.contentfulWork.name}</h1>
      {documentToReactComponents(
        props.data.contentfulWork.body.json,
        options
      )}
    </Layout>
  )
}

export default Work
