import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Index = () => {
  return (
    <Layout>
      <h2>Keep Going, you're awesome.</h2>
      <p>
        Need a developer? <Link to="contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default Index
