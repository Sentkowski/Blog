import React from "react"
import styles from "./post-container.module.css"
import { CSSTransition } from "react-transition-group"
import appear from "../animations/fade-in.module.css"

const transClassNames = {
  appear: appear.compAppear,
  appearActive: appear.compAppearActive,
}

export default (props) => (
  <CSSTransition
              in={true}
              timeout={300}
              classNames={transClassNames}
              appear={true}
  >
    <article className={styles.postContainer}>
      {props.children}
    </article>
  </CSSTransition>
)
