import React from "react"
import styles from "./post-subtitle.module.css"

export default (props) => (
  <h2 className={styles.postSubtitle}>
      {props.subtitle}
  </h2>
)
