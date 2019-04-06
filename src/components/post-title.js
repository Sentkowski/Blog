import React from "react"
import styles from "../components/post-title.module.css"

export default (props) => (
  <h1 className={styles.postTitle}>
      {props.title}
  </h1>
)
