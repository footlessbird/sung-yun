import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from './index.module.scss'

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2 className={indexStyles.title}>The underdog story</h2>
      <small>Just keep going, you're awesome.</small>
    </Layout>
  )
}

export default Index
