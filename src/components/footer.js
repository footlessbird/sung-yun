import React from "react"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerList}>
        <li>
          <a
            href="https://linkedin.com/in/footlessbird/"
            className={footerStyles.footerItem}
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/footlessbird/"
            className={footerStyles.footerItem}
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
