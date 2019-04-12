import React from "react"
import styles from "../components/post-footer.module.css"
import { Link } from "gatsby"

export default () => (
  <footer className={styles.container}>
    <nav className={styles.footerText}>
      This post was created by <Link to="/authors">Camille Poilane and Szymon Sentkowski.</Link> Curious
      about why we do this? Find out <Link to="/about">here.</Link>
    </nav>
    <address>
      Got suggestions, spot a mistake? Feel free to contact us at <a href="mailto:grammechs@gmail.com">grammechs@gmail.com.</a>
    </address>
  </footer>
)
