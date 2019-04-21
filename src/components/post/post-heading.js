import React from "react"
import styles from "./post-heading.module.css"

export default (props) => (
  <h3  id={props.identifier} className={styles.postHeading}>
      {props.heading}
  </h3>
)
