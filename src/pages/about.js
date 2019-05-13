import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>Who I am</h1>
      <h2>Walker</h2>
      <p>
        <Link to="/contact">Wanna work with me?</Link>
      </p>
    </Layout>
  )
}

export default About
