import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact</h2>
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="contact" value="contact" />
        <input type="email" name="email" />
        <input type="text" name="name" />
        <textarea name="message" />
      </form>
    </Layout>
  )
}

export default Contact
