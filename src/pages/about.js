import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>Who I am</h1>
      <h2>Walker</h2>
      <p>
        <Link to="/contact">Wanna work with me?</Link>
      </p>
    </Layout>
  )
}

export default About
