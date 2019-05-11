import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'

const Index = () => {
  return (
    <div>
      <Header />  
      <h2>Keep Going, you're awesome.</h2>
      <p>Need a developer? <Link to="contact">Contact</Link></p>
      <Footer />
    </div>
  )
}

export default Index
