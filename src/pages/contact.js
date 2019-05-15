import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact</h2>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input name="name" placeholder="Your Name" type="text" />
        <button>Send</button>
      </form>
    </Layout>
  )
}

export default Contact
