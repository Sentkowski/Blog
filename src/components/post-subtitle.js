import React from "react"
import styles from "../components/post-subtitle.module.css"

export default (props) => (
  <h2 className={styles.postSubtitle}>
      {props.subtitle}
  </h2>
)
