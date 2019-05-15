import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact</h2>
      <form
        name="contact"
        method="POST"
        netlify
        data-netlify="true"
      >
        <p class="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="text" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default Contact
