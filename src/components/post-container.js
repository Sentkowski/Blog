import React from "react"
import styles from "../components/post-container.module.css"

export default (props) => (
  <article className={styles.postContainer}>
    {props.children}
  </article>
)
