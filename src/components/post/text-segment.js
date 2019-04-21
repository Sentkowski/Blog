import React from "react"
import styles from "./text-segment.module.css"

export default (props) => (
  <div className={styles.textContainer}>
  {props.textSegments.map((paragraph) =>
    <p key={paragraph} className={styles.textParagraph}>{paragraph}</p>
  )}
  </div>
)
