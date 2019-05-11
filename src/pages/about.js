import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const About = () => {
  return (
    <div>
      <Header />
      <h1>Who I am</h1>
      <h2>Walker</h2>
      <p>
        <Link to="/contact">Wanna work with me?</Link>
      </p>
      <Footer />
    </div>
  )
}

export default About
