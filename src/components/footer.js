import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
    <small>SUNG-YUN KANG, ©2019</small>
      <ul className={footerStyles.footerList}>
        <li>
          <a
            href="https://linkedin.com/in/footlessbird/"
            className={footerStyles.footerItem}
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/footlessbird/"
            className={footerStyles.footerItem}
            target="_blank"
          >
            <i className="fab fa-github-square" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
